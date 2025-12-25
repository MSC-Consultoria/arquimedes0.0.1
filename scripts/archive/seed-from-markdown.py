#!/usr/bin/env python3
"""
Script para parsear o arquivo markdown com 135 exercícios e inserir no banco de dados.
"""

import re
import json
import mysql.connector
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

# Conexão com banco
db_url = os.getenv('DATABASE_URL')
# Parse DATABASE_URL: mysql://user:pass@host:port/dbname?params
match = re.match(r'mysql://([^:]+):([^@]+)@([^:]+):(\d+)/([^?]+)', db_url)
if not match:
    print("❌ Erro ao parsear DATABASE_URL")
    print(f"URL: {db_url}")
    exit(1)

user, password, host, port, database = match.groups()

print(f"🔗 Conectando ao banco: {host}:{port}/{database}")

conn = mysql.connector.connect(
    host=host,
    port=int(port),
    user=user,
    password=password,
    database=database,
    ssl_disabled=False
)
cursor = conn.cursor()

# Mapeamento de módulos
MODULES = {
    "SUB": 2,  # Subtração
    "DIV": 3,  # Divisão (usando módulo 3 temporariamente)
    "POR": 3,  # Porcentagem
    "FRA": 3,  # Frações
    "PRO": 3,  # Proporção
    "POT": 3,  # Potenciação
    "RAD": 3,  # Radiciação
    "INT": 3,  # Números Inteiros
    "MUL": 3,  # Múltiplos/Divisores
    "EXP": 3,  # Expressões Numéricas
}

DISCIPLINE_ID = 1  # Aritmética

def parse_markdown_file(filepath):
    """Parse o arquivo markdown e extrai os exercícios."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    exercises = []
    
    # Dividir por exercícios (cada um começa com ####)
    sections = re.split(r'\n#### (EX-ARIT-\w+-\d+)\n', content)
    
    # sections[0] é o cabeçalho, depois vem [id1, content1, id2, content2, ...]
    for i in range(1, len(sections), 2):
        unique_id = sections[i]
        content_block = sections[i+1]
        
        # Extrair campos
        title_match = re.search(r'\*\*Título:\*\* (.+)', content_block)
        question_match = re.search(r'\*\*Pergunta:\*\* (.+)', content_block)
        correct_match = re.search(r'\*\*Resposta Correta:\*\* \w+ \(índice (\d+)\)', content_block)
        explanation_match = re.search(r'\*\*Explicação Passo-a-Passo:\*\*\n(.+?)(?=\n---|\Z)', content_block, re.DOTALL)
        
        if not all([title_match, question_match, correct_match, explanation_match]):
            print(f"⚠️  Pulando {unique_id} - campos incompletos")
            continue
        
        title = title_match.group(1).strip()
        question = question_match.group(1).strip()
        correct_idx = int(correct_match.group(1))
        explanation = explanation_match.group(1).strip()
        
        # Extrair opções
        options = []
        options_section = re.search(r'\*\*Opções:\*\*\n(.+?)\n\*\*Resposta', content_block, re.DOTALL)
        if options_section:
            for line in options_section.group(1).split('\n'):
                if line.strip().startswith('- '):
                    # Remove "- A) " ou "- B) " etc
                    option_text = re.sub(r'^- [A-D]\) ', '', line.strip())
                    options.append(option_text)
        
        if len(options) != 4:
            print(f"⚠️  Pulando {unique_id} - esperava 4 opções, encontrou {len(options)}")
            continue
        
        # Determinar dificuldade e pontos baseado no número do exercício
        exercise_num = int(unique_id.split('-')[-1])
        
        if unique_id.startswith('EX-ARIT-SUB') or unique_id.startswith('EX-ARIT-DIV'):
            # 20 exercícios: 8 fácil, 8 médio, 4 difícil
            if exercise_num <= 8:
                difficulty, points = 'easy', 5
            elif exercise_num <= 16:
                difficulty, points = 'moderate', 10
            else:
                difficulty, points = 'hard', 15
        elif unique_id.startswith('EX-ARIT-POR') or unique_id.startswith('EX-ARIT-FRA') or unique_id.startswith('EX-ARIT-PRO'):
            # 15 exercícios: 6 fácil, 6 médio, 3 difícil
            if exercise_num <= 6:
                difficulty, points = 'easy', 5
            elif exercise_num <= 12:
                difficulty, points = 'moderate', 10
            else:
                difficulty, points = 'hard', 15
        else:
            # 10 exercícios: 4 fácil, 4 médio, 2 difícil
            if exercise_num <= 4:
                difficulty, points = 'easy', 5
            elif exercise_num <= 8:
                difficulty, points = 'moderate', 10
            else:
                difficulty, points = 'hard', 15
        
        # Extrair código do módulo do uniqueId (ex: EX-ARIT-SUB-001 -> SUB)
        module_code = unique_id.split('-')[2]
        module_id = MODULES.get(module_code, 3)
        
        exercise = {
            'uniqueId': unique_id,
            'title': title,
            'question': question,
            'exerciseType': 'multiple_choice',
            'options': options,
            'correctAnswer': correct_idx,
            'stepByStepExplanation': explanation,
            'hint': None,
            'difficulty': difficulty,
            'points': points,
            'disciplineId': DISCIPLINE_ID,
            'moduleId': module_id
        }
        
        exercises.append(exercise)
    
    return exercises

def insert_exercise(exercise):
    """Insere um exercício no banco de dados."""
    query = """
        INSERT INTO standalone_exercises (
            uniqueId, title, question, exerciseType, options, correctAnswer,
            stepByStepExplanation, hint, difficulty, points, disciplineId, moduleId
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    
    values = (
        exercise['uniqueId'],
        exercise['title'],
        exercise['question'],
        exercise['exerciseType'],
        json.dumps(exercise['options'], ensure_ascii=False),
        str(exercise['correctAnswer']),
        exercise['stepByStepExplanation'],
        exercise['hint'],
        exercise['difficulty'],
        exercise['points'],
        exercise['disciplineId'],
        exercise['moduleId']
    )
    
    cursor.execute(query, values)

def main():
    markdown_file = Path(__file__).parent.parent / 'content' / '150-novos-exercicios.md'
    
    print("🚀 Iniciando seed de 135 exercícios...")
    print(f"📄 Lendo arquivo: {markdown_file}")
    
    exercises = parse_markdown_file(markdown_file)
    
    print(f"✅ {len(exercises)} exercícios parseados com sucesso")
    print("📝 Inserindo no banco de dados...")
    
    inserted = 0
    for exercise in exercises:
        try:
            insert_exercise(exercise)
            inserted += 1
            print(f"✓ {exercise['uniqueId']} - {exercise['title']}")
        except Exception as e:
            print(f"✗ Erro ao inserir {exercise['uniqueId']}: {e}")
    
    conn.commit()
    print(f"\n✅ Seed concluído! {inserted}/{len(exercises)} exercícios inseridos.")
    
    cursor.close()
    conn.close()

if __name__ == '__main__':
    main()

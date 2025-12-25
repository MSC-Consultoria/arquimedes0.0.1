#!/usr/bin/env python3
"""
Gerador de Exercícios de Aritmética
Gera 50+ exercícios por módulo com respostas corretas
"""

import json
import random

def generate_addition_exercises():
    """Gera 50 exercícios de adição com dificuldades variadas"""
    exercises = []
    
    # Fácil (20 exercícios) - números até 100
    for i in range(1, 21):
        a = random.randint(10, 50)
        b = random.randint(10, 50)
        correct = a + b
        options = generate_options(correct, 5, 15)
        correct_idx = options.index(correct)
        exercises.append({
            "uniqueId": f"EX-ARIT-ADD-E{i:03d}",
            "title": f"Adição Simples {i}",
            "question": f"Calcule: {a} + {b}",
            "options": [str(o) for o in options],
            "correctAnswer": str(correct_idx),
            "explanation": f"{a} + {b} = {correct}",
            "difficulty": "easy",
            "points": 5,
            "moduleId": 1
        })
    
    # Moderado (20 exercícios) - números até 1000
    for i in range(1, 21):
        a = random.randint(100, 500)
        b = random.randint(100, 500)
        correct = a + b
        options = generate_options(correct, 10, 50)
        correct_idx = options.index(correct)
        exercises.append({
            "uniqueId": f"EX-ARIT-ADD-M{i:03d}",
            "title": f"Adição com Centenas {i}",
            "question": f"Calcule: {a} + {b}",
            "options": [str(o) for o in options],
            "correctAnswer": str(correct_idx),
            "explanation": f"{a} + {b} = {correct}",
            "difficulty": "moderate",
            "points": 10,
            "moduleId": 1
        })
    
    # Difícil (10 exercícios) - problemas contextualizados
    problems = [
        ("João comprou um celular por R$ {a},00 e uma capa por R$ {b},00. Quanto gastou no total?", "R$ {c},00"),
        ("Uma loja vendeu {a} produtos pela manhã e {b} à tarde. Quantos produtos vendeu no dia?", "{c} produtos"),
        ("Maria tem {a} figurinhas e ganhou mais {b}. Quantas figurinhas ela tem agora?", "{c} figurinhas"),
        ("Um ônibus tinha {a} passageiros e entraram mais {b}. Quantos passageiros há agora?", "{c} passageiros"),
        ("Pedro leu {a} páginas ontem e {b} hoje. Quantas páginas leu no total?", "{c} páginas"),
        ("Uma escola tem {a} alunos no turno da manhã e {b} à tarde. Quantos alunos ao todo?", "{c} alunos"),
        ("Carlos economizou R$ {a},00 em janeiro e R$ {b},00 em fevereiro. Quanto economizou?", "R$ {c},00"),
        ("Uma fazenda tem {a} vacas e {b} bois. Quantos animais ao todo?", "{c} animais"),
        ("Ana andou {a} metros e depois mais {b} metros. Quantos metros andou?", "{c} metros"),
        ("Um supermercado vendeu {a} kg de arroz e {b} kg de feijão. Quantos kg vendeu?", "{c} kg"),
    ]
    
    for i, (template, answer_template) in enumerate(problems, 1):
        a = random.randint(200, 800)
        b = random.randint(100, 500)
        correct = a + b
        question = template.format(a=a, b=b)
        correct_answer = answer_template.format(c=correct)
        
        options = [answer_template.format(c=correct + random.randint(-50, -10)),
                   answer_template.format(c=correct),
                   answer_template.format(c=correct + random.randint(10, 50)),
                   answer_template.format(c=correct + random.randint(51, 100))]
        random.shuffle(options)
        correct_idx = options.index(correct_answer)
        
        exercises.append({
            "uniqueId": f"EX-ARIT-ADD-H{i:03d}",
            "title": f"Problema de Adição {i}",
            "question": question,
            "options": options,
            "correctAnswer": str(correct_idx),
            "explanation": f"Soma: {a} + {b} = {correct}",
            "difficulty": "hard",
            "points": 15,
            "moduleId": 1
        })
    
    return exercises

def generate_subtraction_exercises():
    """Gera 50 exercícios de subtração com dificuldades variadas"""
    exercises = []
    
    # Fácil (20 exercícios)
    for i in range(1, 21):
        a = random.randint(50, 100)
        b = random.randint(10, a-10)
        correct = a - b
        options = generate_options(correct, 5, 15)
        correct_idx = options.index(correct)
        exercises.append({
            "uniqueId": f"EX-ARIT-SUB-E{i:03d}",
            "title": f"Subtração Simples {i}",
            "question": f"Calcule: {a} - {b}",
            "options": [str(o) for o in options],
            "correctAnswer": str(correct_idx),
            "explanation": f"{a} - {b} = {correct}",
            "difficulty": "easy",
            "points": 5,
            "moduleId": 90002
        })
    
    # Moderado (20 exercícios)
    for i in range(1, 21):
        a = random.randint(500, 1000)
        b = random.randint(100, a-100)
        correct = a - b
        options = generate_options(correct, 10, 50)
        correct_idx = options.index(correct)
        exercises.append({
            "uniqueId": f"EX-ARIT-SUB-M{i:03d}",
            "title": f"Subtração com Centenas {i}",
            "question": f"Calcule: {a} - {b}",
            "options": [str(o) for o in options],
            "correctAnswer": str(correct_idx),
            "explanation": f"{a} - {b} = {correct}",
            "difficulty": "moderate",
            "points": 10,
            "moduleId": 90002
        })
    
    # Difícil (10 exercícios) - problemas contextualizados
    problems = [
        ("João tinha R$ {a},00 e gastou R$ {b},00. Quanto sobrou?", "R$ {c},00"),
        ("Uma loja tinha {a} produtos e vendeu {b}. Quantos restam?", "{c} produtos"),
        ("Maria tinha {a} figurinhas e deu {b} para sua amiga. Quantas ficaram?", "{c} figurinhas"),
        ("Um ônibus tinha {a} passageiros e {b} desceram. Quantos ficaram?", "{c} passageiros"),
        ("Pedro tinha {a} páginas para ler e já leu {b}. Quantas faltam?", "{c} páginas"),
        ("Uma escola tinha {a} alunos e {b} se formaram. Quantos restam?", "{c} alunos"),
        ("Carlos tinha R$ {a},00 e pagou uma conta de R$ {b},00. Quanto sobrou?", "R$ {c},00"),
        ("Uma fazenda tinha {a} animais e vendeu {b}. Quantos ficaram?", "{c} animais"),
        ("Ana tinha {a} metros de tecido e usou {b} metros. Quantos sobraram?", "{c} metros"),
        ("Um supermercado tinha {a} kg de arroz e vendeu {b} kg. Quantos kg restam?", "{c} kg"),
    ]
    
    for i, (template, answer_template) in enumerate(problems, 1):
        a = random.randint(500, 1000)
        b = random.randint(100, a-100)
        correct = a - b
        question = template.format(a=a, b=b)
        correct_answer = answer_template.format(c=correct)
        
        options = [answer_template.format(c=correct - random.randint(10, 50)),
                   answer_template.format(c=correct),
                   answer_template.format(c=correct + random.randint(10, 50)),
                   answer_template.format(c=correct + random.randint(51, 100))]
        random.shuffle(options)
        correct_idx = options.index(correct_answer)
        
        exercises.append({
            "uniqueId": f"EX-ARIT-SUB-H{i:03d}",
            "title": f"Problema de Subtração {i}",
            "question": question,
            "options": options,
            "correctAnswer": str(correct_idx),
            "explanation": f"Subtração: {a} - {b} = {correct}",
            "difficulty": "hard",
            "points": 15,
            "moduleId": 90002
        })
    
    return exercises

def generate_multiplication_exercises():
    """Gera 50 exercícios de multiplicação com dificuldades variadas"""
    exercises = []
    
    # Fácil (20 exercícios) - tabuada até 12
    for i in range(1, 21):
        a = random.randint(2, 12)
        b = random.randint(2, 12)
        correct = a * b
        options = generate_options(correct, 2, 10)
        correct_idx = options.index(correct)
        exercises.append({
            "uniqueId": f"EX-ARIT-MUL-E{i:03d}",
            "title": f"Tabuada {i}",
            "question": f"Calcule: {a} × {b}",
            "options": [str(o) for o in options],
            "correctAnswer": str(correct_idx),
            "explanation": f"{a} × {b} = {correct}",
            "difficulty": "easy",
            "points": 5,
            "moduleId": 2
        })
    
    # Moderado (20 exercícios) - números maiores
    for i in range(1, 21):
        a = random.randint(10, 30)
        b = random.randint(2, 12)
        correct = a * b
        options = generate_options(correct, 5, 20)
        correct_idx = options.index(correct)
        exercises.append({
            "uniqueId": f"EX-ARIT-MUL-M{i:03d}",
            "title": f"Multiplicação {i}",
            "question": f"Calcule: {a} × {b}",
            "options": [str(o) for o in options],
            "correctAnswer": str(correct_idx),
            "explanation": f"{a} × {b} = {correct}",
            "difficulty": "moderate",
            "points": 10,
            "moduleId": 2
        })
    
    # Difícil (10 exercícios) - problemas contextualizados
    problems = [
        ("Uma caixa tem {a} lápis. Quantos lápis há em {b} caixas?", "{c} lápis"),
        ("Um pacote tem {a} biscoitos. Quantos biscoitos há em {b} pacotes?", "{c} biscoitos"),
        ("Uma fileira tem {a} cadeiras. Quantas cadeiras há em {b} fileiras?", "{c} cadeiras"),
        ("Um andar tem {a} apartamentos. Quantos apartamentos há em {b} andares?", "{c} apartamentos"),
        ("Uma página tem {a} linhas. Quantas linhas há em {b} páginas?", "{c} linhas"),
        ("Uma semana tem {a} dias. Quantos dias há em {b} semanas?", "{c} dias"),
        ("Um mês tem {a} dias. Quantos dias há em {b} meses?", "{c} dias"),
        ("Uma dúzia tem {a} ovos. Quantos ovos há em {b} dúzias?", "{c} ovos"),
        ("Um quilo custa R$ {a},00. Quanto custam {b} quilos?", "R$ {c},00"),
        ("Uma hora tem {a} minutos. Quantos minutos há em {b} horas?", "{c} minutos"),
    ]
    
    for i, (template, answer_template) in enumerate(problems, 1):
        a = random.randint(10, 30)
        b = random.randint(3, 10)
        correct = a * b
        question = template.format(a=a, b=b)
        correct_answer = answer_template.format(c=correct)
        
        options = [answer_template.format(c=correct - random.randint(10, 30)),
                   answer_template.format(c=correct),
                   answer_template.format(c=correct + random.randint(10, 30)),
                   answer_template.format(c=correct + random.randint(31, 60))]
        random.shuffle(options)
        correct_idx = options.index(correct_answer)
        
        exercises.append({
            "uniqueId": f"EX-ARIT-MUL-H{i:03d}",
            "title": f"Problema de Multiplicação {i}",
            "question": question,
            "options": options,
            "correctAnswer": str(correct_idx),
            "explanation": f"Multiplicação: {a} × {b} = {correct}",
            "difficulty": "hard",
            "points": 15,
            "moduleId": 2
        })
    
    return exercises

def generate_division_exercises():
    """Gera 50 exercícios de divisão com dificuldades variadas"""
    exercises = []
    
    # Fácil (20 exercícios) - divisões exatas simples
    for i in range(1, 21):
        b = random.randint(2, 12)
        result = random.randint(2, 12)
        a = b * result  # Garante divisão exata
        correct = result
        options = generate_options(correct, 1, 5)
        correct_idx = options.index(correct)
        exercises.append({
            "uniqueId": f"EX-ARIT-DIV-E{i:03d}",
            "title": f"Divisão Simples {i}",
            "question": f"Calcule: {a} ÷ {b}",
            "options": [str(o) for o in options],
            "correctAnswer": str(correct_idx),
            "explanation": f"{a} ÷ {b} = {correct}",
            "difficulty": "easy",
            "points": 5,
            "moduleId": 3
        })
    
    # Moderado (20 exercícios) - divisões maiores
    for i in range(1, 21):
        b = random.randint(5, 20)
        result = random.randint(10, 30)
        a = b * result  # Garante divisão exata
        correct = result
        options = generate_options(correct, 2, 8)
        correct_idx = options.index(correct)
        exercises.append({
            "uniqueId": f"EX-ARIT-DIV-M{i:03d}",
            "title": f"Divisão {i}",
            "question": f"Calcule: {a} ÷ {b}",
            "options": [str(o) for o in options],
            "correctAnswer": str(correct_idx),
            "explanation": f"{a} ÷ {b} = {correct}",
            "difficulty": "moderate",
            "points": 10,
            "moduleId": 3
        })
    
    # Difícil (10 exercícios) - problemas contextualizados
    problems = [
        ("{a} lápis serão divididos igualmente entre {b} crianças. Quantos lápis cada uma receberá?", "{c} lápis"),
        ("{a} biscoitos serão divididos em {b} pacotes iguais. Quantos biscoitos em cada pacote?", "{c} biscoitos"),
        ("{a} alunos serão divididos em {b} turmas iguais. Quantos alunos por turma?", "{c} alunos"),
        ("R$ {a},00 serão divididos entre {b} pessoas. Quanto cada uma receberá?", "R$ {c},00"),
        ("{a} páginas serão lidas em {b} dias. Quantas páginas por dia?", "{c} páginas"),
        ("{a} metros de tecido serão cortados em {b} pedaços iguais. Quantos metros cada pedaço?", "{c} metros"),
        ("{a} kg de arroz serão divididos em {b} sacos iguais. Quantos kg em cada saco?", "{c} kg"),
        ("{a} figurinhas serão divididas entre {b} amigos. Quantas figurinhas cada um receberá?", "{c} figurinhas"),
        ("{a} horas de trabalho serão divididas em {b} dias. Quantas horas por dia?", "{c} horas"),
        ("{a} livros serão colocados em {b} prateleiras iguais. Quantos livros por prateleira?", "{c} livros"),
    ]
    
    for i, (template, answer_template) in enumerate(problems, 1):
        b = random.randint(4, 12)
        result = random.randint(10, 30)
        a = b * result  # Garante divisão exata
        correct = result
        question = template.format(a=a, b=b)
        correct_answer = answer_template.format(c=correct)
        
        options = [answer_template.format(c=correct - random.randint(2, 5)),
                   answer_template.format(c=correct),
                   answer_template.format(c=correct + random.randint(2, 5)),
                   answer_template.format(c=correct + random.randint(6, 10))]
        random.shuffle(options)
        correct_idx = options.index(correct_answer)
        
        exercises.append({
            "uniqueId": f"EX-ARIT-DIV-H{i:03d}",
            "title": f"Problema de Divisão {i}",
            "question": question,
            "options": options,
            "correctAnswer": str(correct_idx),
            "explanation": f"Divisão: {a} ÷ {b} = {correct}",
            "difficulty": "hard",
            "points": 15,
            "moduleId": 3
        })
    
    return exercises

def generate_percentage_exercises():
    """Gera 50 exercícios de porcentagem com dificuldades variadas"""
    exercises = []
    
    # Fácil (20 exercícios) - porcentagens simples (10%, 25%, 50%)
    easy_percentages = [10, 20, 25, 50]
    for i in range(1, 21):
        percent = random.choice(easy_percentages)
        base = random.choice([100, 200, 400, 500, 1000])
        correct = int(base * percent / 100)
        options = generate_options(correct, 5, 20)
        correct_idx = options.index(correct)
        exercises.append({
            "uniqueId": f"EX-ARIT-PER-E{i:03d}",
            "title": f"Porcentagem Básica {i}",
            "question": f"Calcule: {percent}% de {base}",
            "options": [str(o) for o in options],
            "correctAnswer": str(correct_idx),
            "explanation": f"{percent}% de {base} = {base} × {percent/100} = {correct}",
            "difficulty": "easy",
            "points": 5,
            "moduleId": 120006
        })
    
    # Moderado (20 exercícios) - porcentagens variadas
    for i in range(1, 21):
        percent = random.choice([5, 15, 30, 40, 60, 75])
        base = random.choice([100, 200, 300, 400, 500])
        correct = int(base * percent / 100)
        options = generate_options(correct, 5, 25)
        correct_idx = options.index(correct)
        exercises.append({
            "uniqueId": f"EX-ARIT-PER-M{i:03d}",
            "title": f"Porcentagem {i}",
            "question": f"Calcule: {percent}% de {base}",
            "options": [str(o) for o in options],
            "correctAnswer": str(correct_idx),
            "explanation": f"{percent}% de {base} = {base} × {percent/100} = {correct}",
            "difficulty": "moderate",
            "points": 10,
            "moduleId": 120006
        })
    
    # Difícil (10 exercícios) - problemas de desconto e aumento
    problems_discount = [
        ("Um produto custa R$ {base},00 e está com {percent}% de desconto. Qual o preço final?", "R$ {final},00", "desconto"),
        ("Uma blusa de R$ {base},00 está com {percent}% de desconto. Quanto você pagará?", "R$ {final},00", "desconto"),
        ("Um livro de R$ {base},00 teve {percent}% de desconto. Qual o novo preço?", "R$ {final},00", "desconto"),
        ("Um celular de R$ {base},00 está {percent}% mais barato. Quanto custa agora?", "R$ {final},00", "desconto"),
        ("Uma TV de R$ {base},00 teve redução de {percent}%. Qual o preço atual?", "R$ {final},00", "desconto"),
    ]
    
    problems_increase = [
        ("Um salário de R$ {base},00 teve aumento de {percent}%. Qual o novo salário?", "R$ {final},00", "aumento"),
        ("Um aluguel de R$ {base},00 aumentou {percent}%. Quanto é o novo aluguel?", "R$ {final},00", "aumento"),
        ("Uma mercadoria de R$ {base},00 teve reajuste de {percent}%. Qual o novo preço?", "R$ {final},00", "aumento"),
        ("Um investimento de R$ {base},00 rendeu {percent}%. Qual o valor total?", "R$ {final},00", "aumento"),
        ("Uma conta de R$ {base},00 teve acréscimo de {percent}%. Quanto pagar?", "R$ {final},00", "aumento"),
    ]
    
    all_problems = problems_discount + problems_increase
    
    for i, (template, answer_template, tipo) in enumerate(all_problems, 1):
        percent = random.choice([10, 15, 20, 25, 30])
        base = random.choice([100, 150, 200, 250, 300, 400, 500])
        
        if tipo == "desconto":
            final = base - int(base * percent / 100)
        else:
            final = base + int(base * percent / 100)
        
        question = template.format(base=base, percent=percent)
        correct_answer = answer_template.format(final=final)
        
        options = [answer_template.format(final=final - random.randint(10, 30)),
                   answer_template.format(final=final),
                   answer_template.format(final=final + random.randint(10, 30)),
                   answer_template.format(final=final + random.randint(31, 60))]
        random.shuffle(options)
        correct_idx = options.index(correct_answer)
        
        exercises.append({
            "uniqueId": f"EX-ARIT-PER-H{i:03d}",
            "title": f"Problema de Porcentagem {i}",
            "question": question,
            "options": options,
            "correctAnswer": str(correct_idx),
            "explanation": f"{percent}% de {base} = {int(base * percent / 100)}, Resultado: {final}",
            "difficulty": "hard",
            "points": 15,
            "moduleId": 120006
        })
    
    return exercises

def generate_options(correct, min_diff, max_diff):
    """Gera 4 opções incluindo a correta"""
    options = [correct]
    while len(options) < 4:
        diff = random.randint(min_diff, max_diff)
        sign = random.choice([-1, 1])
        new_option = correct + (diff * sign)
        if new_option > 0 and new_option not in options:
            options.append(new_option)
    random.shuffle(options)
    return options

def generate_sql_inserts(exercises):
    """Gera comandos SQL INSERT para os exercícios"""
    sql_statements = []
    
    for ex in exercises:
        options_json = json.dumps(ex["options"], ensure_ascii=False)
        sql = f"""INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId) VALUES ('{ex["uniqueId"]}', '{ex["title"]}', '{ex["question"].replace("'", "''")}', 'multiple_choice', '{options_json}', '{ex["correctAnswer"]}', '{ex["explanation"].replace("'", "''")}', '{ex["difficulty"]}', {ex["points"]}, 1, {ex["moduleId"]});"""
        sql_statements.append(sql)
    
    return sql_statements

if __name__ == "__main__":
    random.seed(42)  # Para reprodutibilidade
    
    all_exercises = []
    all_exercises.extend(generate_addition_exercises())
    all_exercises.extend(generate_subtraction_exercises())
    all_exercises.extend(generate_multiplication_exercises())
    all_exercises.extend(generate_division_exercises())
    all_exercises.extend(generate_percentage_exercises())
    
    print(f"Total de exercícios gerados: {len(all_exercises)}")
    print(f"- Adição: 50")
    print(f"- Subtração: 50")
    print(f"- Multiplicação: 50")
    print(f"- Divisão: 50")
    print(f"- Porcentagem: 50")
    
    # Gera arquivo SQL
    sql_statements = generate_sql_inserts(all_exercises)
    
    with open("/home/ubuntu/arquimedes/scripts/insert_arithmetic_exercises.sql", "w", encoding="utf-8") as f:
        f.write("-- Exercícios de Aritmética gerados automaticamente\n")
        f.write("-- Total: 250 exercícios\n\n")
        for sql in sql_statements:
            f.write(sql + "\n")
    
    print("\nArquivo SQL gerado: /home/ubuntu/arquimedes/scripts/insert_arithmetic_exercises.sql")

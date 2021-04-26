# Testes de lógica

Acesse os arquivos dos testes clicando [aqui](https://github.com/jefferson-calmon/giro-tech-processo-seletivo/tree/main/testes-de-logica)

# Estrutura de dados e SQL

1. Buscar os nomes de todos os alunos que frequentam alguma turma do professor 'JOAO PEDRO'.
```sql
SELECT Nome FROM ALUNOS INNER JOIN TURMA WHERE TURMA.PROFESSOR = 'JOAO PEDRO';
```

2. Buscar os dias da semana que tenham aulas da disciplina 'MATEMATICA'.
```sql
SELECT dia_da_semana FROM TURMA WHERE DISCIPLINA = 'MATEMATICA';
```

3. Buscar todos os alunos que frequentem aulas de 'MATEMATICA' e também 'FISICA'.
```sql
SELECT Nome FROM ALUNOS INNER JOIN TURMA WHERE TURMA.DISCIPLINA = 'MATEMATICA' and DISCIPLINA = 'FISICA';
```

4. Buscar as disciplinas que não tenham nenhuma turma.
```sql
SELECT nome FROM DISCIPLINA INNER JOIN TURMA WHERE TURMA.DISCIPLINA != nome;
```

5. Buscar os alunos que frequentem aulas de 'MATEMATICA' exceto os que frequentem 'QUIMICA’. 
```sql
SELECT Nome FROM ALUNOS INNER JOIN TURMA WHERE TURMA.DISCIPLINA = 'MATEMATICA' and DISCIPLINA != 'QUIMICA';
```

# Projeto To Do

O projeto foi realizado usando o React juntamente com TypeScript. Segue abaixo os links do projeto:

[Acessar projeto no ar](https://giro-tech-project-todo.netlify.app/)

[Acessar código do projeto](https://github.com/jefferson-calmon/giro-tech-project-todo)
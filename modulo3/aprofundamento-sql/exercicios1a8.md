👍🏽✔🟢concluído

# ATIVIDADES MYSQL

## EXO 1 🚀 
R:a)Apaga a coluna salary

b)muda o nome da coluna gender para sex deixando o tipo varchar com 6 caracteres

c)muda o tipo da coluna gender para varchar com 255 caracteres

d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


## EXO 2 🚀 
R:a)UPDATE Actor
SET birth_date= "1999-06-07"
WHERE id = "003"

b)UPDATE Actor
SET name =  UPPER(name)
WHERE id = "005"

UPDATE Actor
SET name =  "Juliana Paes"
WHERE id = "005"

c)UPDATE Actor
set name = UPPER(name),salary=1000,birth_date="1980-03-02",gender="male" WHERE id ="005";

d)UPDATE SocorroDeus
SET name = "Ajuda"
WHERE id = "001"

Informa que a tabela não existe da erro 1146

## EXO 3 🚀 
R:a)DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b)DELETE FROM Actor WHERE gender = "male" AND salary>1000000


## EXO 4 🚀 
R:a)SELECT MAX(salary) FROM Actor

b)SELECT MIN(salary) FROM Actor WHERE gender = "female"

c)SELECT COUNT(*) FROM Actor WHERE gender = "female"

d)SELECT SUM(salary) FROM Actor


## EXO 5 🚀 
R:a)A query conta quantas pessoas de cada genero temos na tabela

b)SELECT name, id FROM Actor ORDER BY name DESC;

c)SELECT name,salary FROM Actor ORDER BY salary ASC;

d)SELECT name,salary FROM Actor ORDER BY salary DESC LIMIT 3;

e)SELECT AVG(salary) FROM Actor GROUP BY gender;


## EXO 6 🚀 
R:a)ALTER TABLE Movies
ADD playing_limit_date DATE(255);

b)ALTER TABLE Movies
CHANGE rating rating FLOAT;

c)UPDATE Movies
SET playing_limit_date = "2022-08-10"
WHERE ID = "001";

UPDATE Movies
SET playing_limit_date = "2022-08-28"
WHERE ID = "002";

d)DELETE FROM Movie WHERE id = "001";


## EXO 7 🚀 
R:a)SELECT COUNT(*) FROM Movies WHERE rating>7.5 

b)SELECT AVG(rating) FROM Movies

c)SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();

d)SELECT COUNT(*) FROM Movies WHERE realease_Date> CURDATE();

e)SELECT MAX(rating) FROM Movies;

f)SELECT MIN(rating) FROM Movies;


## EXO 8 🚀 
R:a)SELECT * FROM Movies ORDER BY name DESC;

b)SELECT * FROM Movies ORDER BY name DESC LIMIT 5;

c)SELECT * FROM Movies WHERE release_Date < CURDATE() ORDER BY release_Date DESC LIMIT 3;

d)SELECT * FROM Movies ORDER BY rating DESC LIMIT 3;



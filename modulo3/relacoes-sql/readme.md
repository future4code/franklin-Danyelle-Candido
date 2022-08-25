## Exo1
### a)
 a chave estrangeira é uma chave que conecta uma planilha a outra

### b)
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

### c)
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "Muito bom!",
    7,
		"111"
);

Aparece que a chave estrangeira esta falhada

### d)
ALTER TABLE Movies DROP COLUMN rating;

### e)
DELETE FROM Movies
WHERE id = "005";

## Exo2
### a)
A tabela criada vem com duas chaves estrangeiras para conecta-la com outras duas tabelas
### b)
INSERT INTO MovieCast (movie_id,actor_id) 
VALUES ("001", "001"),(	"001","003"),("002","004"),("002","005"),("003","005"),("003","001");
### c)
INSERT INTO MovieCast (movie_id,actor_id) 
VALUES ("111","222");

da falha ao conectar com as chaves estrangeiras

### d)
DELETE FROM Actor
WHERE id = "003";

fala que eu não posso deletar porque esta sendo usada na tabela movie cast

## Exo3
### a)
SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;

On é usado para juntar tabelas em uma coluna 
### b)
SELECT m.title, m.id as movie_id, r.rate as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;

## Exo4
### a)
SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment
FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;
### b)
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movies m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
### c)
SELECT AVG(r.rate), m.id, m.title FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);


## Exo5
### a)
Porque iremos juntar 3 tabelas
### b)
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

### c) 
primeiro eu seleciono tudo oque eu quero na minha planilha e altero os nomes das colunas de id para falar de que tipo de id estou falando (p/ não ter varias colunas com o nome id) ai coloco a tabela de filmes e junto com a tabela de avaliação e junto a coluna id que esta com movies com a coluna id que esta em moviecast (já que ambas tem o mesmo valor )e faço o mesmo com a coluna id de actor com a actor_id de movie cast

### d)
SELECT 
		m.id as movie_id, 
    m.title, 
    a.id as actor_id, 
    a.name, 
    r.rate, 
    r.comment 
FROM Movie m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;


## Exo6
### a)
N:M porque um oscar podem ser dados para varios filmes e um filme pode ganhar varios oscars
### b)
CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    award_day DATE NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

usei o create table dentro dele coloquei id a categoria do oscar (melhor filme, melhor roteiro) e a data que foi premiado, e tambem coloquei o id do filme 

### c)
INSERT INTO Oscar (id,category,award_day,movie_id) 
VALUES ("001","melhor filme","1990-12-01","001"),("002","melhor animação","1999-12-01","001"),
("003","melhor roteiro","1990-12-01","002"),("004","melhor imagem","2010-12-01","002"),
("008","melhor filme","1995-12-01","003"),("005","melhor filme","2000-12-01","003"),
("006","melhor direção","1998-12-01","004"),("007","melhor roteiro","1995-12-01","004");
### d)
SELECT m.id as movie_id, m.title, o.category,o.award_day FROM Movies m
RIGHT JOIN Oscar o ON o.movie_id = m.id;



CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

describe Movies;
SELECT * FROM Movies;

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "Muito bom!",
    7,
		"111"
);

ALTER TABLE Movies DROP COLUMN rating;

DELETE FROM Movies
WHERE id = "005";

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

SELECT * FROM Movies;
SELECT * FROM Actor;

INSERT INTO MovieCast (movie_id,actor_id) 
VALUES (
	"001",
    "001"
),(
	"001",
    "003"
),(
	"002",
    "004"
),(
	"002",
    "005"
);

INSERT INTO MovieCast (movie_id,actor_id) 
VALUES ("111","222");


DELETE FROM Actor
WHERE id = "003";

SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;

SELECT m.title, m.id as movie_id, r.rate as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;

SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment
FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id;

SELECT m.id as movie_id, m.title, mc.actor_id FROM Movies m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;

SELECT AVG(r.rate), m.id, m.title FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);

SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

SELECT 
	m.id as movie_id, 
    m.title, 
    a.id as actor_id, 
    a.name, 
    r.rate, 
    r.comment 
FROM Movies m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    award_day DATE NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

INSERT INTO Oscar (id,category,award_day,movie_id) 
VALUES ("001","melhor filme","1990-12-01","001"),("002","melhor animação","1999-12-01","001"),
("003","melhor roteiro","1990-12-01","002"),("004","melhor imagem","2010-12-01","002"),
("008","melhor filme","1995-12-01","003"),("005","melhor filme","2000-12-01","003"),
("006","melhor direção","1998-12-01","004"),("007","melhor roteiro","1995-12-01","004");

SELECT * FROM Movies;

SELECT m.id as movie_id, m.title, o.category,o.award_day FROM Movies m
RIGHT JOIN Oscar o ON o.movie_id = m.id;





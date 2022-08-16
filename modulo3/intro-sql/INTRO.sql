USE  `franklin-danyelle-candido`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,# ID é do tipo varcha (string) com 500 até caracteres e é a chave primeria , ou seja não pode ser igual a outro id pois é o identificador
    name VARCHAR (255) NOT NULL,#ID é do tipo varcha (string) com 500 até caracteres e não pode vir nulo
    salary FLOAT NOT NULL,#salary é do tipo float (numero não inteiro ) pode ser um numero com centavos por exemplo e não poide vir nulo
    birth_date DATE NOT NULL,#data de aniversário do tipo date que recebe datas e não pode vir nulo
    gender VARCHAR(6) NOT NULL #genero é um varcha (string) com até 6 caracteres e não pode vir nulo
);

SHOW DATABASES;#mostra os bancos de dados criados

SHOW TABLES; #mostra as tabelas dentro dos bancos de dados criadas

DESCRIBE Actor;#mostra os itens da minha tabela contando tipos de cada item se podem ser null e se são primary key

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Luiz Otávio",
  1200000,
  "1963-08-23", 
  "male"
);

INSERT INTO Actor (id, name,salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "Maria Antonieta",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);  

SELECT id, name from Actor WHERE id = "002" ;

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";

SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;

CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,#ID COMO CHAVE PRIMARIA
    title VARCHAR(255) NOT NULL UNIQUE,#TITULO EM VARCHAR
    synopsis TEXT NOT NULL,#SINOPSE EM TEXT
    release_Date DATE NOT NULL,#DATA DE LANÇAMENTO DATE
    rating INT NOT NULL#AVALIAÇÃO DO USUARIO
);

INSERT INTO Movies (id, title, synopsis, release_Date, rating)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
),(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  7
),(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
),(
  "004",
  "O Homem que desafiou o diabo",
  "Araujo decide mudar de vida e pra issdo muda até seu nome para Ojuara,nessa nova trilha ele acaba desafiando o diabo e passa por diversas aventuras.",
  "2007-08-12", 
  9
);

SELECT * FROM Movies;

INSERT INTO Movies (id, title, synopsis, release_Date, rating)
VALUES(
  "005",
  "Vida",
  "filme começa muito bem. Uma das primeiras cenas é um grande plano-sequência no qual conhecemos os seis personagens centrais e entendemos um pouco da dinâmica do grupo. ",
  "2017-03-06", 
  7
);

SELECT id, title, synopsis from Movies WHERE rating>=7 ;

SELECT title from Movies WHERE title LIKE "%vida%" OR "%Vida%" ;

SELECT title from Movies WHERE (title LIKE "%vida%" OR "%Vida%" )OR (synopsis LIKE "%vida%" OR "%Vida%") ;  
  
SELECT title from Movies WHERE release_Date<CURDATE() AND (title LIKE "%vida%" OR "%Vida%" )OR (synopsis LIKE "%vida%" OR "%Vida%") AND rating>=7 ; 
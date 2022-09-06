CREATE TABLE TodoListUser (
		id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE TodoListTask (
		id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    limit_date DATE NOT NULL,
    creator_user_id varchar(255) NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
);

CREATE TABLE TodoListResponsibleUserTaskRelation (
		task_id VARCHAR(255),
    responsible_user_id VARCHAR(255),
    FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
    FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
);


SELECT * FROM TodoListResponsibleUserTaskRelation;

describe TodoListUser;
describe TodoListTask;
describe TodoListResponsibleUserTaskRelation;

SELECT id, name FROM TodoListUser;
SELECT * FROM TodoListTask;
SELECT * FROM TodoListResponsibleUserTaskRelation;

CREATE TABLE Clientes (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    cpf VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE Contas (
	id VARCHAR(255) PRIMARY KEY, 
    id_cliente VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id)
);

INSERT INTO Clientes(id,name,cpf)
VALUES("cliente1","Alice","111"),("cliente2","Alice","222");
SELECT * FROM Clientes;

UPDATE Clientes
SET name = "BoB"
WHERE ID = "cliente2";

INSERT INTO Contas(id,id_cliente,email,senha)
VALUES("conta1","cliente1","alice@gmail.com","alice123"),("conta2","cliente2","bob@gmail.com","bob123");
SELECT * FROM Contas;

SELECT * FROM Contas
JOIN Clientes
ON Contas.id_cliente = Clientes.id;

CREATE TABLE Fornecedores (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    cnpj VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE Produtos (
	id VARCHAR(255) PRIMARY KEY, 
    id_fornecedor VARCHAR(255) NOT NULL, 
    name VARCHAR(255) UNIQUE NOT NULL,
    preco DECIMAL(8,2) NOT NULL,
    FOREIGN KEY (id_fornecedor) REFERENCES Fornecedores(id)
);

DROP TABLE Produtos;

ALTER TABLE Produtos 
CHANGE id_fornecedor id_fornecedor VARCHAR(255) NOT NULL;

INSERT INTO Fornecedores(id,name,cnpj)
VALUES("forn1","Coragem","333"),("forn2","Dory","444");
SELECT * FROM Fornecedores;

INSERT INTO Produtos(id,id_fornecedor,name,preco)
VALUES("produto1","forn1","cenoura",2),("produto2","forn1","Abacate",10),("produto3","forn1","cebola",4),("produto4","forn2","camarão",120),("produto5","forn2","lula",44);
SELECT * FROM Contas;

SELECT * FROM Contas
JOIN Clientes
ON Contas.id_cliente = Clientes.id;


CREATE TABLE Compras(
	id VARCHAR(255) PRIMARY KEY,
    id_cliente VARCHAR (255) NOT NULL,
    id_produto VARCHAR (255) NOT NULL,
    quantidade INT DEFAULT 1,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id),
    FOREIGN KEY (id_produto) REFERENCES Produtos(id)
);

INSERT INTO Compras(id,id_cliente, id_produto)
VALUES("compra1","cliente1","produto1");

INSERT INTO Compras(id,id_cliente, id_produto)
VALUES("compra2","cliente1","produto2");

INSERT INTO Compras(id,id_cliente, id_produto)
VALUES("compra3","cliente2","produto1");

INSERT INTO Compras(id,id_cliente, id_produto)
VALUES("compra4","cliente2","produto3");

SELECT Produtos.preco, Produtos.name, Compras.quantidade, Compras.quantidade*Produtos.preco AS Total, Clientes.name FROM Compras
LEFT JOIN Produtos ON Compras.id_produto = Produtos.id
LEFT JOIN Clientes ON Compras.id_cliente = Clientes.ID;

SELECT t.*, nickname FROM TodoListTask t
JOIN TodoListUser u ON creator_user_id = u.id;
  
SELECT nickname ,t.* FROM TodoListTask t
JOIN TodoListUser u ON creator_user_id = u.id
WHERE u.id = "1661210188102";


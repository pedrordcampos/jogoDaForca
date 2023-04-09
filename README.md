# Projeto Jogo da Forca
Este projeto utiliza um banco de dados MariaDB para armazenar informações relacionadas a jogos da forca. Utiliza também o Xampp como servidor local.

## Comandos SQL
Para criar o banco de dados, execute o seguinte comando:

### CREATE DATABASE projetosDB;

Em seguida, acesse o banco de dados criado com o comando:
### USE projetosDB;

A tabela "jogoDaForca" pode ser criada com o seguinte comando:
#### CREATE TABLE jogoDaForca (
####  id INT NOT NULL AUTO_INCREMENT,
####  palavras VARCHAR(255) NOT NULL,
####  categorias VARCHAR(255) NOT NULL,
####  PRIMARY KEY (id)
#### );

Um exemplo de insert ao banco:
INSERT INTO projetosDB.jogoDaForca (palavras,categorias) VALUES
    ('AFEGANISTAO','PAÍS'),
    ('AFRICA DO SUL','PAÍS'),
    ('ALBANIA','PAÍS'),
    ('ALEMANHA','PAÍS'),
    ('ANDORRA','PAÍS'),
    ('ANGOLA','PAÍS'),
    ('ANTIGUA E BARBUDA','PAÍS'),
    ('ARABIA SAUDITA','PAÍS'),
    ('ARGELIA','PAÍS'),
    ('ARGENTINA','PAÍS');
INSERT INTO projetosDB.jogoDaForca (palavras,categorias) VALUES
    ('VASCO','FUTEBOL'),
    ('FLUMINENSE','FUTEBOL'),
    ('CRUZEIRO','FUTEBOL'),
    ('ATLETICO MINEIRO','FUTEBOL');

## CRÉDITOS:
Agnaldo Guimarães
https://www.youtube.com/@AgnaldoGuimaraes

## ADAPTAÇÃO
Pedro Ricardo de Campos



DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT AUTO_INCREMENT,
  userID INT,
  roomname VARCHAR(255) NOT NULL,
  text VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


CREATE DATABASE IF NOT EXISTS tasks;

use tasks;

CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    PRIMARY KEY (id)
);
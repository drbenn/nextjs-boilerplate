#!/bin/bash

# chmod +x create-db.sh

echo "|=============== CREATE-DB STARTED ===============|"
ROOT_PASSWD="pass"
DB="boilerplate"

# Create database
mysql -u root -p$ROOT_PASSWD -e "CREATE DATABASE $DB;"


# Switch to the newly created database AND Create a table named 'users' with the specified columns
mysql -u root -p$ROOT_PASSWD -e "
    USE $DB; 
    CREATE TABLE posts (
        id INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(75) NOT NULL,
        post VARCHAR(240) NOT NULL,
        join_date DATETIME DEFAULT CURRENT_TIMESTAMP
    );"


echo "|=============== Database Created ===============|"
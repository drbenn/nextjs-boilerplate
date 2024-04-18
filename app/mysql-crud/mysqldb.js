"use server";

import mysql from 'mysql2/promise';

const executeQuery = async (query, data) => {
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',  // Replace with your MySQL username
            password: 'pass',  // Replace with your MySQL password
            database: 'boilerplate',  // Replace with your database name
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
          });
        const [result] = await db.execute(query, data);
        await db.end();
        const normalizedResults = result.map(item => Object.assign({}, item));
        return normalizedResults;
    } catch (error) {
        console.error(error);
        return new Error(error);
    };
};

export default executeQuery;
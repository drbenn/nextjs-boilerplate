// lib/userService.ts
import mysql from 'mysql2/promise';

// MySQL connection settings
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',  // Replace with your MySQL username
  password: 'pass',  // Replace with your MySQL password
  database: 'boilerplate',  // Replace with your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


// Business logic for user creation
export const getUsers = async () => {
    try {
      const query = 'SELECT * FROM users';
      const results = await pool.query(query);
      console.log(results);
    //   const junk = Object.assign([{}], result[0]);
    //   console.log('JUNK');
    //   console.log(junk);
      
    const normalizedResults = results.map(item => Object.assign({}, item));
    console.log(normalizedResults);
    
      return normalizedResults[0];
    } catch (error) {
      throw error;
    }
  };

// Business logic for user creation
export const createUser = async (username: string, email: string) => {
  try {
    const query = 'INSERT INTO users (username, email) VALUES (?, ?)';
    const [result] = await pool.query(query, [username, email]);
    return result;
  } catch (error) {
    throw error;
  }
};

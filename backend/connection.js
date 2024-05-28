// Import necessary modules
import mysql from "mysql";
import getSecret from './secret_manager.js';
import dotenv from "dotenv";

// Load environment variables from.env file
dotenv.config();

// Declare a variable to hold our database connection
let db;

/**
 * Initializes the database connection.
 * This function decides whether to use credentials stored in AWS Secrets Manager or directly from environment variables,
 * based on the value of the CRED environment variable.
 */
async function initializeDatabase() {
  // Determine the source of credentials
  let user, password;
  if (process.env.CRED === 'from_secret') {
    // Attempt to retrieve credentials from AWS Secrets Manager
    const secretData = await getSecret();
    if (!secretData) {
      console.error('Failed to retrieve database credentials from AWS Secrets Manager');
      return;
    }
    user = secretData.username;
    password = secretData.password;
  } else if (process.env.CRED === 'from_env') {
    // Use credentials directly from environment variables
    user = process.env.DB_USER;
    password = process.env.DB_PASSWORD;
  } else {
    console.error('Invalid CRED value. Please set CRED to either "from_secret" or "from_env".');
    return;
  }

  // Establish a connection to the database
  db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: user,
    password: password,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  });

  // Log successful connection
  db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
  });
}

// Initialize the database connection
initializeDatabase();

// Export the initialized database connection for use elsewhere in the application
export default db;

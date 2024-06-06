import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from './connection.js'; // Import the database connection

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors("*"));


// Fetch all student records
app.get('/students', (req, res) => {
  const sql = "SELECT * FROM students";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ error: "Error fetching student data." });
    }
    return res.json(data);
  });
});

// Fetch a specific student record by ID
app.get('/student/:id', (req, res) => {
  const sql = "SELECT * FROM students WHERE id = ?";
  db.query(sql, [req.params.id], (err, data) => {
    if (err) {
      return res.json({ error: "Error fetching student data." });
    }
    return res.json(data[0]);
  });
});

// Update a student record by ID
app.put('/update/:id', (req, res) => {
  const sql = "UPDATE students SET name = ?, dob = ?, result = ? WHERE id = ?";
  const values = [
    req.body.name,
    req.body.dob,
    req.body.result
  ];
  db.query(sql, [...values, req.params.id], (err, data) => {
    if (err) {
      return res.json({ error: "Error updating student record." });
    }
    return res.json({ message: "Student record updated successfully!" });
  });
});

// Create a new student record
app.post('/create', (req, res) => {
  const sql = "INSERT INTO students (name, dob, result) VALUES (?, ?, ?)";
  const values = [
    req.body.name,
    req.body.dob,
    req.body.result
  ];
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json({ error: "Error creating student record." });
    }
    return res.json({ message: "Student record created successfully!" });
  });
});

// Delete a student record by ID
app.delete('/delete/:id', (req, res) => {
  const sql = "DELETE FROM students WHERE id = ?";
  db.query(sql, [req.params.id], (err, data) => {
    if (err) {
      return res.json({ error: "Error deleting student record." });
    }
    return res.json({ message: "Student record deleted successfully!" });
  });
});

const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

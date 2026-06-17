const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Chethan@2328",
  database: "student_management_db"
});

db.connect((err) => {
  if (err) {
    console.log("MySQL connection failed:", err.message);
  } else {
    console.log("Connected to MySQL successfully");
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// --------------------
// GET: Show all students
// --------------------
app.get("/students", (req, res) => {
  const sql = "SELECT * FROM students ORDER BY student_id DESC";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

// --------------------
// GET: Show all courses
// --------------------
app.get("/courses", (req, res) => {
  const sql = "SELECT * FROM courses ORDER BY course_id DESC";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

// --------------------
// GET: Student course report
// --------------------
app.get("/report", (req, res) => {
  const sql = `
    SELECT 
      s.student_id,
      s.roll_no,
      s.full_name,
      c.course_code,
      c.course_name,
      e.semester,
      e.academic_year,
      m.internal_marks,
      m.external_marks,
      m.total_marks,
      m.grade
    FROM students s
    JOIN enrollments e ON s.student_id = e.student_id
    JOIN courses c ON e.course_id = c.course_id
    LEFT JOIN marks m ON e.enrollment_id = m.enrollment_id
    ORDER BY s.student_id DESC
  `;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

// --------------------
// POST: Add student
// --------------------
app.post("/students", (req, res) => {
  const {
    roll_no,
    full_name,
    gender,
    dob,
    phone,
    email,
    address,
    admission_year
  } = req.body;

  if (!roll_no || !full_name || !gender || !admission_year) {
    return res.status(400).json({
      error: "roll_no, full_name, gender, and admission_year are required"
    });
  }

  const sql = `
    INSERT INTO students 
    (roll_no, full_name, gender, dob, phone, email, address, admission_year)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [roll_no, full_name, gender, dob || null, phone || null, email || null, address || null, admission_year],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({
        message: "Student added successfully",
        id: result.insertId
      });
    }
  );
});

// --------------------
// PUT: Update student by student_id
// --------------------
app.put("/students/:id", (req, res) => {
  const id = req.params.id;
  const { address } = req.body;

  const sql = "UPDATE students SET address = ? WHERE student_id = ?";
  db.query(sql, [address, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student updated successfully" });
  });
});

// --------------------
// PUT: Update student by roll_no
// --------------------
app.put("/students/rollno/:roll_no", (req, res) => {
  const roll_no = req.params.roll_no;
  const { address } = req.body;

  const sql = "UPDATE students SET address = ? WHERE roll_no = ?";
  db.query(sql, [address, roll_no], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student updated successfully" });
  });
});

// --------------------
// DELETE: Remove student by student_id
// --------------------
app.delete("/students/:id", (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM students WHERE student_id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted successfully" });
  });
});

// --------------------
// DELETE: Remove student by roll_no
// --------------------
app.delete("/students/rollno/:roll_no", (req, res) => {
  const roll_no = req.params.roll_no;

  const sql = "DELETE FROM students WHERE roll_no = ?";
  db.query(sql, [roll_no], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted successfully" });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
# 🎓 Student Management System

A full-stack Student Management System developed using **Node.js, Express.js, MySQL, HTML, CSS, and JavaScript**. The application is designed to manage student records, course information, enrollments, and academic reports through a user-friendly web interface.

## 🚀 Features

### Student Management

* Add new student records
* View all students
* Update student details
* Delete student records
* Store personal and academic information

### Course Management

* View available courses
* Manage course information
* Maintain course catalog in MySQL database

### Academic Reports

* Generate student-course reports
* Display enrollment information
* View marks and grades
* Consolidated reporting using SQL JOIN operations

### Database Operations

* Create, Read, Update, Delete (CRUD)
* MySQL relational database design
* Primary Key and Foreign Key relationships
* SQL Joins and Queries
* Data validation and error handling

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Libraries

* Express
* MySQL2
* CORS

---

## 📂 Project Structure

```text
student-management-app/
│
├── public/
│   └── index.html
│
├── server.js
├── package.json
├── package-lock.json
└── node_modules/
```

---

## 🗄️ Database Design

The system uses a relational database with the following entities:

### Students

Stores student information:

* Student ID
* Roll Number
* Name
* Gender
* Date of Birth
* Phone Number
* Email
* Address
* Admission Year

### Courses

Stores course information:

* Course ID
* Course Code
* Course Name
* Credits
* Department

### Enrollments

Maps students to courses:

* Enrollment ID
* Student ID
* Course ID
* Semester
* Academic Year

### Marks

Stores academic performance:

* Internal Marks
* External Marks
* Total Marks
* Grade

---

## 🔗 API Endpoints

### Student APIs

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| GET    | /students     | Get all students |
| POST   | /students     | Add new student  |
| PUT    | /students/:id | Update student   |
| DELETE | /students/:id | Delete student   |

### Course APIs

| Method | Endpoint | Description     |
| ------ | -------- | --------------- |
| GET    | /courses | Get all courses |

### Report APIs

| Method | Endpoint | Description             |
| ------ | -------- | ----------------------- |
| GET    | /report  | Generate student report |

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/student-management-system.git
```

### Install Dependencies

```bash
npm install
```

### Configure Database

Update MySQL credentials in `server.js`

```javascript
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "YOUR_PASSWORD",
  database: "student_management_db"
});
```

### Run Application

```bash
npm start
```

Open browser:

```text
http://localhost:3000
```

---

## 🎯 Learning Outcomes

This project demonstrates:

* Relational Database Design
* SQL Query Writing
* Database Normalization
* REST API Development
* Full Stack Development
* CRUD Operations
* MySQL Integration with Node.js
* Frontend and Backend Communication
* Data Validation and Error Handling

---

## 📈 Future Enhancements

* Student Authentication
* Admin Dashboard
* Role-Based Access Control
* Attendance Management
* Fee Management
* PDF Report Generation
* Search and Filter Functionality
* Responsive Mobile Application

---

## 👨‍💻 Author

**Chethan P S**

Student Management System developed as a Database Management System (DBMS) academic project to demonstrate practical implementation of relational database concepts, SQL operations, and full-stack web development and it is a useful skill.

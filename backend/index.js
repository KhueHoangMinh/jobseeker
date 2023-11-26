const express = require('express');
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({limit: '1mb'}))
app.use(express.json())
app.use(cors())
const port = 3001;

// MySQL connection configuration
const connectionConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test_erdiagram',
};

var connection = mysql.createConnection(connectionConfig);

// Middleware to parse JSON request bodies
app.use(express.json());

// Sign up - INSERT statement
app.post('/api/signup', async (req, res) => {
  try {
    const { firstName, lastName, dob, gender, displayName, password, email } = req.body;
    const sql = `
      INSERT INTO users (firstName, lastName, dob, gender, displayName, password, email)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    connection.query(sql, [firstName, lastName, dob, gender, displayName, password, email], (err,result) => {
      if(err) {
        res.send(err);
      } else {
        res.send(result)
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("error")
  }
});

// Sign in - SELECT statement
app.post('/api/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const sql = `
      SELECT userId, firstName, lastName, dob, gender, displayName, email, image
      FROM users WHERE email = ? AND password = ?
    `;
    connection.query(sql, [email, password], (err, result) => {
        res.send(result);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// Add a CV - INSERT statement
app.post('/api/cv', async (req, res) => {
  try {
    const { userId, cvLink, cvTitle } = req.body;
    const sql = `
      INSERT INTO cv (userId, cvLink, cvTitle) VALUES (?, ?, ?)
    `;
    const [result] = await connection.query(sql, [userId, cvLink, cvTitle]);
    connection.end();
    res.status(200).json({ message: 'CV added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// Send contact - INSERT statement
app.post('/api/contact', async (req, res) => {
  try {
    const { senderId, receiverId, email, phone, name, message } = req.body;
    const sql = `
      INSERT INTO contact (senderId, receiverId, email, phone, name, message)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const [result] = await connection.query(sql, [senderId, receiverId, email, phone, name, message]);
    connection.end();
    res.status(200).json({ message: 'Contact sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// Update user information - UPDATE statement
app.put('/api/users/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { firstName, lastName } = req.body;
    const sql = `
      UPDATE users SET firstName = ?, lastName = ? WHERE userId = ?
    `;
    const [result] = await connection.query(sql, [firstName, lastName, userId]);
    connection.end();
    res.status(200).json({ message: 'User information updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// Add education background - INSERT statement
// app.post('/education', async (req, res) => {
//   try {
//     const { userId, institutionId, degree, field, type } = req.body;
//     const connection = await mysql.createConnection(connectionConfig);
//     const sql = `
//       INSERT INTO institutionmember VALUES (?, ?, ?, ?, ?)
//     `;
//     const [result] = await connection.query(sql, [userId, institutionApologies, .


// get jobs
app.post('/api/getjob', async (req, res) => {
    try {
      const sql = `
        SELECT * 
        FROM jobs AS j
        JOIN company AS c
        JOIN cities 
        JOIN countries
        ON j.companyId = c.companyId
        AND j.address = cities.cityId
        AND cities.countryId = countries.countryId
        WHERE 1
        LIMIT 15
        ;
      `;

      const skillSql = `
        SELECT *
        FROM skillrequirement AS req
        JOIN skills
        ON req.skillId = skills.skillId
        WHERE req.jobId = ?;
      `;
      var final = [];
       connection.query(sql, [], async (err, result) => {
        final = await result
        result => {
            for(i = 0; i < result.length; i ++) {
                connection.query(skillSql, [result[i].jobId], async (err,result2) => {
                    console.log(result[i])
                    result[i].req = await result2
                })
            }
        }
        res.send(final);
        });
        
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  });

app.listen(port, console.log("running on port: ", port));
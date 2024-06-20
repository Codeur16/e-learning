const express = require("express");
const router = express.Router();

const {
  StudentRegistration,
  StudentLogin,
  deleteStudent,
  updateStudent,
  getStudentById,
  getAllStudents,
} = require("../controllers/StudentAuth");




// router.post("/create", StudentRegistration);
// router.post("/login", StudentLogin);
// router.delete("/delete/:id", deleteStudent);
// router.put("/update/:id", updateStudent);
// router.get("/get/:id", getStudentById);
// router.get("/get", getAllStudents);



/**
 * @swagger
 * tags:
 *   name: Student Controller
 *   description: Endpoints for student operations
 */

/**
 * @swagger
 * /api/student/create:
 *   post:
 *     tags: [Student Controller]
 *     summary: Create a new student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *               age:
 *                 type: integer
 *               email:
 *                 type: string
 *               preference:
 *                 type: string
 *               sexe:
 *                 type: string
 *               role:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Student created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post('/create', StudentRegistration);

/**
 * @swagger
 * /api/student/login:
 *   post:
 *     tags: [Student Controller]
 *     summary: Login as a student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student logged in successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
 */
router.post('/login', StudentLogin);

/**
 * @swagger
 * /api/student/delete/{id}:
 *   delete:
 *     tags: [Student Controller]
 *     summary: Delete a student by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the student to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
 */
router.delete('/delete/:id', deleteStudent);

/**
 * @swagger
 * /api/student/update/{id}:
 *   put:
 *     tags: [Student Controller]
 *     summary: Update a student by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the student to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *               age:
 *                 type: integer
 *               email:
 *                 type: string
 *               preference:
 *                 type: string
 *               sexe:
 *                 type: string
 *               role:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
 */
router.put('/update/:id', updateStudent);

/**
 * @swagger
 * /api/student/get/{id}:
 *   get:
 *     tags: [Student Controller]
 *     summary: Get a student by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the student to get
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
 */
router.get('/get/:id', getStudentById);

/**
 * @swagger
 * /api/student/get:
 *   get:
 *     tags: [Student Controller]
 *     summary: Get all students
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server error
 */
router.get('/get', getAllStudents);

module.exports = router;

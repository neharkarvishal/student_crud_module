const express = require('express');
const { Student } = require('../models/student');
const auth = require('./../middlewares/auth');
const admin = require('./../middlewares/admin');
const validateObjectId = require('./../middlewares/validateObjectId');

const router = express.Router();

router.get('/', async (request, response) => {
  const students = await Student.find().sort('name');

  return response.send(students);
});

router.post('/', async (request, response) => {
  const { name, email, phone } = request.body;
  let student = new Student({ name, email, phone });
  student = await student.save();

  return response.send(student);
});

router.put('/:id', [admin, validateObjectId], async (request, response) => {
  const { id } = request.params;
  const { name, email, phone } = request.body;
  const student = await Student.findByIdAndUpdate(
    id,
    { name, email, phone },
    { new: true },
  );
  if (!student) {
    return response.status(404).send('The student not found.');
  }

  return response.send(student);
});

router.delete(
  '/:id',
  [admin, auth, validateObjectId],
  async (request, response) => {
    const { id } = request.params;
    const student = await Student.findByIdAndRemove(id);
    if (!student) {
      return response.status(404).send('The student not found.');
    }

    return response.send(student);
  },
);

router.get('/:id', validateObjectId, async (request, response) => {
  const { id } = request.params;
  const student = await Student.findById(id);
  if (!student) {
    return response.status(404).send('The student not found.');
  }

  return response.send(student);
});

module.exports = router;

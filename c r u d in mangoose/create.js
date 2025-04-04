const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    reg: Number
});

const Student = mongoose.model('Student', studentSchema);

const createStudent = async () => {
    const newStudent = new Student({ name: 'Rajnish', age: 23, reg: 45678980 });
    const result = await newStudent.save();
    console.log('Student Created:', result);
};

createStudent();

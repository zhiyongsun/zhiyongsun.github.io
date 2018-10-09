/**
 *author zhiyong
 *date  2016/10/30
 */
var student = require('./student'),
    teacher = require('./teacher');

teacher.add('Scott')

function add(teacherName, students) {

    students.forEach(function (item,index) {
        student.add(item)
    })
}

exports.add = add
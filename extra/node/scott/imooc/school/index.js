var kclass = require('./klass');

exports.add = function (klasses) {
    klasses.forEach(function (item,index) {
        var _klass = item,
            teacherName = item.teacherName,
            students = item.students;

        klass.add(teacherName,students)
    })
}

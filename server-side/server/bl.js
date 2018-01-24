var dal = require('./dal');
var Studentmodels = require('./models/models.Student.js');
var Coursemodels = require('./models/models.course.js');
var Adminmodels = require('./models/models.admin.js');


function getStudents(callback) {
    dal.executeQuery('SELECT * FROM `Students`', function(err, rows) {
        if (err) {
            callback(err);
        }

        const StudentObjectsArray = [];
        rows.forEach(function(row) {
            StudentObjectsArray.push(new models.Student(row));
        });
        callback(null, StudentObjectsArray);
    });
}


function getadmins(callback) {
    dal.executeQuery('SELECT * FROM `admins`', function(err, rows) {
        if (err) {
            callback(err);
        }

        const adminObjectsArray = [];
        rows.forEach(function(row) {
            adminObjectsArray.push(new models.Admin(row));
        });
        callback(null, adminObjectsArray);
    });
}




module.exports.Student = {
    getStudents: getStudents
}
module.exports.Admin = {
    getadmins: getAdmins
}
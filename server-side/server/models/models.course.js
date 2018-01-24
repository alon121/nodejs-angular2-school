function course(course) {
    this.courseID = course['courseID'];
    this.courseName = course['courseName'];
    this.courseImg = course['courseimg'];
    this.courseDescription = course['courseDescription'];
}

module.exports.course = Course;
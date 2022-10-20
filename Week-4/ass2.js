let Person = (fname, lname) => {
    this.fname = fname;
    this.lname = lname;
}

let Teacher = function(fname, lname) {
    Person.call(this, fname, lname);
}

Teacher.prototype.teach = (subject) => {
    return `${this.fname} ${this.lname} is now teaching ${subject}`
}

const teacher = new Teacher('Lewis', 'Hamilton', 'Algebra');

console.log(teacher.teach('Algebra'));

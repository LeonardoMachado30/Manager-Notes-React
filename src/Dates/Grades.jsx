export default class GradesList {
  constructor() {
    this.grades = [];
  }

  addGradesState(title, text, category) {
    let newGrades = new Grade(title, text, category);
    this.grades.push(newGrades);
  }

  deleteGradesState(index) {
    this.grades.splice(index, 1);
    this.notification();
  }

  setRegister(func) {
    this.grades.push(func);
  }

  notification() {}
}

class Grade {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
  }
}

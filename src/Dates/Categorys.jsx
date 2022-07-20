class Categorys {
  constructor() {
    this.categorys = [];
    this._enrolledArray = [];
  }
  
  setRegister(func){
    this._enrolledArray.push(func)
  }

  notificar(){
    this._enrolledArray.forEach(func => func(this.categorys.categorys))
  }

  addCategoryState(newCategory) {
    this.categorys.categorys.push(newCategory);
  }
}

export default Categorys;

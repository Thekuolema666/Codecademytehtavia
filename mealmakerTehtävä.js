const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
  
    get appetizers() {
      return this._courses.appetizers
    },
  
   get mains() {
      return this._courses.mains
    },
  
    get desserts() {
      return this._courses.desserts
    },
  
    set appetizers(appetizers) {
      this._course.appetizers = appetizers
    },
  
    set mains(mains) {
      this._course.mains = mains
    },
  
    set desserts(desserts) {
      this._course.desserts = desserts
    },
    
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
  
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
  
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex]
    },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}, and the total price is ${totalPrice}`
  }
    
  };
  
  menu.addDishToCourse('appetizers', 'salad', 4.00);
  menu.addDishToCourse('appetizers', 'fish', 8.00);
  menu.addDishToCourse('appetizers', 'potato', 2.00);
  
  menu.addDishToCourse('mains', 'pork', 7);
  menu.addDishToCourse('mains', 'hamburger', 11.00);
  menu.addDishToCourse('mains', 'fries', 5.00);
  
  menu.addDishToCourse('desserts', 'Ice cream', 1.00);
  menu.addDishToCourse('desserts', 'tea', 3.00);
  menu.addDishToCourse('desserts', 'cake', 2.00);
  
  const meal = menu.generateRandomMeal();
  console.log(meal)
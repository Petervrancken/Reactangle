
 //Maak een class Rectangle(w, h, x, y)
 //getters en setters voor width, height, x, y
 //geef deze een random-bgcolor (npmjs.org/random-color)
 //oppervlakte van die rectangle?
 //afstand van rect tot rect => A²=B²+C² (van midden tot midden)
 ///als je klikt op 1 rechthoek dan krijgt die een nieuwe BGC
  //hitTest/collision detection


class Reactangle {
  constructor(width, height, x, y) {
    this._width = width;
    this._height = height;
    this._x = x;
    this._y = y;
    this._ref = this.generateHTML();
    this.setupStyling();
    this.setupEvents();
  }
  generateHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div class="rectangle">
      </div>`
    );
    return document.querySelector("div:last-child");
  }
  setupStyling() {
    const styles = {
      left: this._x + "px",
      top: this._y + "px",
      width: this._width + "px",
      height: this._height + "px",
    };
    Object.assign(this._ref.style, styles);
  }
  setupEvents() {
    this._ref.onclick = () => {
      this._ref.style.backgroundColor = "blue";
      document.body.style.backgroundColor = "black";
    };
  }
  get width(){
    return this._width;
  }
  get height(){
    return this._height;
  }
  set position(coordinates){
    const arr = coordinates.replace(' ','').split(",")
    this._x = arr[0];
    this._y = arr[1];
    this.setupStyling();
  }
  oppervlakte(){
    return `Oppervlakte: ${this._width*this._height}`;
  }
  pythagoras(){
    const middle = Math.pow(this._width,2) + Math.pow(this._width,2);
    return `The middle is = ${Math.floor(Math.sqrt(middle))}`;
  }
}

const rectangle1 = new Reactangle(100, 80, 20, 50);
const rectangle2 = new Reactangle(100, 100, 20, 50);
rectangle2.position = "200, 200"



console.log(rectangle1.width);
console.log(rectangle1.height);
console.log(rectangle1.oppervlakte());
console.log(rectangle1.pythagoras());


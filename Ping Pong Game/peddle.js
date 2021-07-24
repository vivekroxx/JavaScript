class Peddle{
  constructor(x){
      this.x = x;
      this.y = 200;
      this.w = 20;
      this.h = 100;
      this.vy = 0;
  }  
  move(){

  }
  show(){
      rect(this.x, this.y, this.w, this.h);
  }
}
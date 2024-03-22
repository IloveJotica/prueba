import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ProCalculadora';

  screen= "";
  a:any;
  b:any;
  c:any;
  d="";
  e="";

  ngOnInit(): void {
    
  }
  
  //calculadora

  EnterValue(value:string){
    if((this.b=="+") || (this.b=="-") || (this.b=="*") || (this.b=="/") || (this.b=="cos") || (this.b=="sen" || (this.b=="tan") || (this.b=="raiz"))){
      this.d = this.d + value;
      this.screen = this.screen + value; 
      this.c = this.d;
      
     
    }else{
      this.screen = this.screen + value;
      this.a= this.screen;
      
    }



  }

  condition(value:string){
    this.screen= this.screen + value;
    this.b = value;
  }

  clear(){

    this.screen="";
    this.a = "";
    this.b = "";
    this.c = "";
    this.d = "";

  }

  result(){

    if(this.b =='+'){

      this.screen = (parseInt(this.a) + parseInt(this.c)).toString();

      console.log (this.a, this.b , this.c, `=`, this.screen);

    }
    if(this.b =='-'){

      this.screen = (parseInt(this.a) - parseInt(this.c)).toString();

      console.log (this.a, this.b , this.c, `=`, this.screen);

    }
    if(this.b =='*'){

      this.screen = (parseInt(this.a) * parseInt(this.c)).toString();


      console.log (this.a, this.b , this.c, `=`, this.screen);
      
      if(this.b =='/'){

        this.screen = (parseInt(this.a) / parseInt(this.c)).toString();

        console.log (this.a, this.b , this.c, `=`, this.screen);
  
      }

      

    }
    

  }


}


  import { Component, OnInit } from '@angular/core';
  import { IUser } from 'src/app/shared/interfaces/user.interface';

  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })
  export class HomeComponent implements OnInit {
    public string: string = ``
    public arrUsers: Array<IUser> = [
      {id:  1,
        task: 'HTML5',
        check: false,
        progres: 'In Progres'
      },
      {id: 2,
        task: 'Css',
        check: true,
        progres: 'done'
      },
      {id: 3,
        task: 'Sass',
        check: true,
        progres: 'done'
      }
      
      
    ]
    public number: number = this.arrUsers.length

    constructor() { }

    ngOnInit(): void {
      this.arrUsers.length
    }
    addValue():void{
      const user= {
        id: this.arrUsers.length+1,
        task: this.string,
        check: false,
        progres: 'In Progres'
        
      }
      if (user.task !=``) {
        this.arrUsers.push(user)
      }
      this.string = ``
      this.number = this.arrUsers.length
        
    }
    getData(data:number):void{
      this.number= data
    }
  
    
  }
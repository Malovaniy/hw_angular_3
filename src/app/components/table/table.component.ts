import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() name!: string
  @Input() arrUsers: Array<IUser> = []
  @Output() newLength = new EventEmitter<number>();
  public islength!: number 
  public isid!: number  
  public chang!: string
  
  
  public isBoolean: boolean = true
  public isfalse: boolean  = false
  
  
  constructor() { }
  
  ngOnInit(): void {  
    this.arrUsers.length  
  }
  valvLength():void{
    this.islength === this.arrUsers.length
  }
  changer(item: IUser): void{    
    if(item.check){
      item.progres = 'done'
    }
    else{
      item.progres = 'In Progres'
    }
  }
  edit(id:number):void{
    this.isfalse = !this.isfalse
    this.isid = id-1    
    this.chang = this.arrUsers[this.isid].task
  }
  save():void{
    this.arrUsers[this.isid].task = this.chang
    console.log(this.arrUsers[this.isid].task);
    this.isfalse = false
  }
  delete(idd:number):void{
    this.isid = idd
    this.arrUsers.splice(this.isid-1, 1)
    this.arrUsers.forEach((element, i )=> {
      element.id = i+1
    });    
    this.newLength.emit(this.arrUsers.length)
  }
  
}

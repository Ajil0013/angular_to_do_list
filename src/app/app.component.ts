import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  items:string[]=[];
  task:string='';

  addTask(){
    if (this.task==""){}
    else{
      this.items.push(this.task);
      this.task="";
    }
  }

  deleteTask(index:number){
    this.items.splice(index,1)
  }
}

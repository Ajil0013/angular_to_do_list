import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  items:{content:string,done:boolean}[]=[];
  task:string='';

  addTask(){
    if (this.task==""){}
    else{
      this.items.push({content:this.task,done:false});
      this.task="";
    }
  }

  deleteTask(index:number){
    this.items.splice(index,1)
  }

  onDone(index:number){
    this.items[index].done=true;
  }
}

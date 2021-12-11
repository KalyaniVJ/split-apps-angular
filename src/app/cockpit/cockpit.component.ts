import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();;
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  //newServerName='';
  newServerContent='';
  constructor() { }

  ngOnInit(){
  }
  onAddServer(nameInput:HTMLInputElement){
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.newServerContent
    })
  }
  onAddblueprint(nameInput:HTMLInputElement){
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.newServerContent
    })
  }
  
}

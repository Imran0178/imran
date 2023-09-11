import { Component } from '@angular/core';

@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.css'],
})
export class AddEntityComponent {
  var = {
    'primaryKey': false,
    'relationShip': '',
    'nestedClass': false,
    'varType': '',
    'varName': '',
  };
  variableList :any = [this.var];
  newEntity :any={};
  addVar(){
    this.variableList.push(this.var);
  }
  createEntity() {
    this.newEntity.variables= this.variableList
  console.log(this.newEntity);
  
  }
}

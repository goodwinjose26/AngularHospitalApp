import { Component } from '@angular/core';

@Component({
  selector: 'app-pateint-delete',
  templateUrl: './pateint-delete.component.html',
  styleUrls: ['./pateint-delete.component.css']
})
export class PateintDeleteComponent {
name=""
  deleteValues =()=>
  {
    let data:any =
    {
      "name":this.name
    }
    console.log(data)
  }

}

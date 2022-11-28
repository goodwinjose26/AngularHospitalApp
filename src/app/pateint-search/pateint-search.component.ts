import { Component } from '@angular/core';

@Component({
  selector: 'app-pateint-search',
  templateUrl: './pateint-search.component.html',
  styleUrls: ['./pateint-search.component.css']
})
export class PateintSearchComponent {
  name=""
  searchValues =()=>
  {
    let data:any =
    {
      "name":this.name
    }
    console.log(data)
  }


}

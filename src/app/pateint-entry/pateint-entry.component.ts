import { Component } from '@angular/core';

@Component({
  selector: 'app-pateint-entry',
  templateUrl: './pateint-entry.component.html',
  styleUrls: ['./pateint-entry.component.css']
})
export class PateintEntryComponent {

  name=""
  id=""
  address=""
  phno=""
  doa=""
  image=""
  dname=""

  entryValues =()=>
  {
    let data:any =
    {
      "name":this.name,"id":this.id,"address":this.address,"phno":this.phno,"doa":this.doa,"image":this.image,"dname":this.dname
    }
    console.log(data)
  }

}

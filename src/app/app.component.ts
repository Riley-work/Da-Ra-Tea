import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Da-Ra-Tea';
  firstName = 'Damini';
  imagepath="assests/thu/jpg";

  passValueToComponent(e:any) {
    console.log(e.target.value);
  }

  getValue(myvalue:any) {
    console.log = myvalue.target.value;
  }
  defaultV:string ='type here....';

  public display = false;
  
  isLoggedIn: boolean = true;
username: string = 'Damiii';

isApproved = false;

approve(code: boolean){
  this.isApproved = code;

}


}

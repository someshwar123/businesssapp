import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
clickMessage='';
  constructor(private formpass:FormBuilder) { }

  passwordForm=this.formpass.group({
    email : ['' , Validators.required],
    phnumber : ['', Validators.required],
  });

  ngOnInit() {
  }
  onClickMe(){
  this.clickMessage= "link sent successfully";
  }

}

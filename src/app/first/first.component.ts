import { Component,OnInit} from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  firstForm=this.formb.group({
    firstName : ['' , Validators.required],
    lastName : ['', Validators.required],
    address:this.formb.group({
    state: ['',Validators.required],
    city: [''],
    pincode: ['']
    })
});
title = 'Online Registration Form';


constructor(private formb:FormBuilder) {}

onSubmit(){
  console.warn(this.firstForm.value);
}
updateProfile()
{
  this.firstForm.patchValue({
    lastName:'ravi',
    address:{
      state :'Tamilnadu'
    }
  });
}
ngOnInit() {
}
}




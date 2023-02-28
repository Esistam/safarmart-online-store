import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,

  ){}
  ngOnInit(){
    this.firstFormGroup = this._formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        mobile: ['', Validators.required],
        country: ['', Validators.required],
        city: ['', Validators.required],
        estate: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      amt: ['', Validators.required],
      method: ['', Validators.required],
      mpesa_no: ['']
    });
  }
  goHome(){ 
    this.router.navigate([`/`])
  }
}

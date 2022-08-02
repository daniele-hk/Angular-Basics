import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit() {                 
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)],
                                            this.asyncForbiddenNames.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null),
    });
  }

  onSubmit(){
    console.log(this.projectForm.value);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'Test') {
      return {nameIsForbidden: true}
    }
    return null;
  } 

  asyncForbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'Test2') {
          resolve({asyncNameIsForbidden: true});
        } else {
          resolve(null);
        }
      }, 1500)
    });
    return promise;
  }
} 
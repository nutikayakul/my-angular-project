import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA   } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


// export interface User {
//   id: number;
//   firstname: string;
//   lastname: string;
//   gender: string;
//   score: number;
// }


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppComponent implements OnInit {

  items: any[] = [
    { id: 1, firstname: "Wilbur", lastname: "Rogers", gender: "M", score: 80 },
    { id: 2, firstname: "Lorenzo", lastname: "Underwood", gender: "M", score: 40.5 },
    { id: 3, firstname: "Pearl", lastname: "Johnson", gender: "F", score: 60.45 },
    { id: 4, firstname: "Russell", lastname: "Patrick", gender: "M", score: 70.5 },
    { id: 5, firstname: "Nicolas", lastname: "Watts", gender: "M", score: 34.25 },
    { id: 6, firstname: "Anny", lastname: "Bates", gender: "F", score: 74.5 }
];

  formGroup: FormGroup;
  
  users: any[] = [];

  jsonData: any;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    
    this.formGroup = this.formBuilder.group({
      score: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    
  }


  onSubmit() {
    console.log(this.formGroup.value);
  }

}


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  entrada = new FormGroup({
    palabra : new FormControl('Escribe algo!', Validators.required)
  })


  constructor() { }

  ngOnInit(): void {
  }

}

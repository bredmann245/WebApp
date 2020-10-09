import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  value: number = 357.34882;

  constructor() {}

  ngOnInit(): void {}

  onClick(value: number) {
    this.value = value;
  }
}

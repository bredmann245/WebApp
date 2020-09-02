import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  body = [
    {
      title: 'hello',
      blog: 'this is a blog',
    },
    {
      title: 'hello',
      blog: 'this is a blog',
    },
    {
      title: 'hello',
      blog: 'this is a blog',
    },
  ];

  constructor(private service: ConfigService) {}

  ngOnInit(): void {
    // this.service.getBlog().subscribe((res) => {
    //   console.log(res);
    //   this.body.push(res);
    // });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  date!: any;

  constructor() {}

  ngOnInit(): void {
    this.fetchDateTime();
  }

  fetchDateTime(): void {
    this.date = new Date();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  links = [
    { id: 1, name: 'three.js-01', path: '/r-creative-three' },
    { id: 2, name: 'three.js-02', path: '/r-creative-three-second' },
  ];
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  navigationList;
  title = 'angular course';
  userNotLoggedIn = false;
  constructor() {
    this.navigationList = [
      { name: 'home', url: 'home.html' },
      { name: 'about', url: 'about.html' },
      { name: 'contact us', url: 'contact us.html' },
    ];
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title: string;
  urls: any[];
  test: number;
  resources: object[];

  ngOnInit() {
    this.title = 'Cheatsheat 02.01. Template Syntax';

    this.urls = [
      {title: 'Angular in a Nutshell - Cheatsheets collection',
      url: 'http://software-developer.org/2019/02/11/Angular-cheatsheet-00-in-a-Nutshell-with-cheatsheets-collection/'},
      {title: 'GitHub examples',
      url: 'https://github.com/taitruong/angular-examples'}
    ];

    this.resources = [
      {url: 'https://angular.io'},
      {title:
      'Angular: Grundlagen, fortgeschrittene Techniken und Best Practices mit TypeScript - ab Angular 4, inklusive NativeScript und Redux',
      url: 'https://angular-buch.com/blog'}
    ];

  }

  public log1() {
    console.log('>>> log 1');
  }

  public log2() {
    console.log('>>> log 2');
  }
}

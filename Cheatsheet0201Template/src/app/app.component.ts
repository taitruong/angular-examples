import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    '.my-style {color: red}'
  ]
})
export class AppComponent implements OnInit {
  title: string;
  label: string;
  label2: string;
  urls: any[];
  test: number;
  resources: object[];
  appProperty: string;
  yourName: string;

  ngOnInit() {
    this.title = 'Cheatsheat 02.01. Template Syntax';
    this.label = 'some text';
    this.label2 = 'change me!';
    this.yourName = '';

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

    this.appProperty = 'some value from main app component';

  }

  public addPrefix() {
    this.label = 'p-' + this.label;
  }

  public addSuffix() {
    this.label = this.label + '-s';
  }

  public resetProp() {
    // resetting this property won't affect other component's property!
    this.appProperty = 'default value from app component';
  }

  public changeMe() {
    this.label2 = 'changed';
  }

  public changeMe2() {
    this.label2 = 'changed again';
  }

}

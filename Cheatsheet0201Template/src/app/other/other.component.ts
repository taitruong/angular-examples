import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styles: []
})
export class OtherComponent implements OnInit {

  @Input() otherProperty: string;

  constructor() { }

  ngOnInit() {
  }

  public logProp() {
    console.log('The following has been passed from the main app component to this other component: ' + this.otherProperty);
  }

  public resetProp() {
    // resetting this property won't affect other component's property!
    this.otherProperty = 'default';
  }
}

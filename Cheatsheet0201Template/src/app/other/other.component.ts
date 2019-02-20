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

  public resetProp() {
    // resetting this property won't affect other component's property!
    this.otherProperty = 'default value from other component';
  }
}

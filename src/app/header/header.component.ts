import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @Output('featureSelected') featureSelected = new EventEmitter<string>();
  
  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }
}

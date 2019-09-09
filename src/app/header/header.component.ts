import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('menuSelected') menuSelected = new EventEmitter<string>();
  
  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

  onSelect(menu: string) {
    this.menuSelected.emit(menu);
  }
}

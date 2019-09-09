import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  navigateTo = 'recipes';

  ngOnInit(): void {
    console.log(`navigate to: ${this.navigateTo}`);
  }

  showRecipes() {
    return this.navigateTo === 'recipes';
  }

  onNavigate(menu: string) {
    console.log(`navigate to: ${menu}`);
    this.navigateTo = menu;
  }
 
}

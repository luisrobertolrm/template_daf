import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prototipo';

  public items: MenuItem[] = [];

    ngOnInit() {
        this.items = [{
            label: 'MENU 1',
            items: [
                {label: 'Lista 1'},
            ]
        },
        {
            label: 'MENU 2',
            items: [
                {label: 'Form 1', routerLink:"lista1"},
            ]
        }];
    }

  constructor(){
  }


}

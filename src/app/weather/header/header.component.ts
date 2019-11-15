import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public globalService: GlobalService) { }

  ngOnInit() {
  }

  toggleDarkMode() {
    this.globalService.darkMode = !this.globalService.darkMode;
  }

}

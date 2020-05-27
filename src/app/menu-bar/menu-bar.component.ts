import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  facebook = "https://www.facebook.com";
  youtube = "https://www.youtube.com";
  instagram = "https://www.instagram.com";
  whatsapp = "https://web.whatsapp.com";
  twitter = "https://twitter.com";
  telegram = "https://www.telegram.com";


}

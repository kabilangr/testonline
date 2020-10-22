import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

  }
hamburgerClick():void{
  const navLinks=document.querySelector(".nav-link");
  const links=document.querySelectorAll(".nav-link li");
    navLinks.classList.toggle("open");
  links.forEach(link =>{
    link.classList.toggle("fade");
  });
}
}

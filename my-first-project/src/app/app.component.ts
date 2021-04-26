import { Component, OnInit } from '@angular/core';
import { HomepageService } from './services/homepage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private homePage:HomepageService) { }

  menuBarList:any;
  menubarStatus:boolean=false;

  ngOnInit(): void {

    this.homePage.getHeader().subscribe(data=>{
      this.menuBarList=data;     
      this.menubarStatus=true;
      console.log(this.menuBarList);
    },error=>{
      console.log(error);
    });

    this.homePage.getSideBar().subscribe(data=>{
      console.log(data)
    },error=>{
      console.log(error);
    });

    this.homePage.getFooter().subscribe(data=>{
      console.log(data);
    },error=>{
      console.log(error);
    })

  }

}

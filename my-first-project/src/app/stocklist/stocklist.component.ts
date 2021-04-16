import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent implements OnInit {

  stocks:any;

  constructor(private uploadService:UploadService ) { }

  ngOnInit(): void {
    this.uploadService.getStockList().subscribe(data=>{
      this.stocks=data;
    }, err=>{
      console.log(err);
    })
  }



}

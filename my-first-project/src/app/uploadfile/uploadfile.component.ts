import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';
@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {
  
  fileToUpload:any;
  currentInput="Choose file";
  constructor(private uploadService:UploadService) { }

  ngOnInit(): void {    
  }


  onChange(event) {

    if (event.target.files && event.target.files.length > 0) {
      this.fileToUpload = event.target.files.item(0);
      this.currentInput = event.target.files.item(0).name;
      console.log(this.currentInput)
    }

  }

  uploadFile(){
    const formdata:FormData = new FormData();
    console.log(this.fileToUpload);
    formdata.append('file',this.fileToUpload, this.fileToUpload.name);
    this.uploadService.upload(formdata).subscribe(data=>{
      console.log(data);
    }, err=>{
      console.log(err);
    })
  }

}   
import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-reveiw-card',
  templateUrl: './reveiw-card.component.html',
  styleUrls: ['./reveiw-card.component.css']
})
export class ReveiwCardComponent implements OnInit {

  constructor(private service:SharedService) { }

  ReveiwList:any=[];

  ngOnInit(): void {
    this.GetReveiwList(); // call to get the data
  }

  GetReveiwList(){
    this.service.getReveiwList().subscribe(data=>{
      this.ReveiwList=data;
    });
  }
}

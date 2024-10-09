import { Component, OnInit } from '@angular/core';
import { ManagerNavbarComponent } from "../manager-navbar/manager-navbar.component";
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../../service/manager.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-manager-issue-reply',
  standalone: true,
  imports: [ManagerNavbarComponent, FormsModule, NgIf],
  templateUrl: './manager-issue-reply.component.html',
  styleUrl: './manager-issue-reply.component.css'
})
export class ManagerIssueReplyComponent implements OnInit{

  id:number;
  employeeName:string='';
  description:string='';
  date:string='';
  replyMsg:string='';

  successMsg:string=undefined;
  errorMsg:string=undefined;

  constructor(private actRoute:ActivatedRoute, private managerService:ManagerService){
  }

  ngOnInit(): void {
    this.id=Number(this.actRoute.snapshot.paramMap.get('id'));
    this.fetchData(this.id);
  }

  fetchData(id: number) {
    this.managerService.getIssueById(id).subscribe({
      next:(data)=>{
        this.employeeName=data.employee.name;
        this.description=data.description;
        this.date=data.date;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  reply(id: number) {
    this.managerService.replyIssue(id,{
      "replyMessage":this.replyMsg
   }).subscribe({
    next:(data)=>{
      this.successMsg = 'Reply sent';
      this.errorMsg = undefined
    },
    error:(err)=>{
      this.successMsg = undefined;
      if(err.status == 304){
       this.errorMsg = err.message;
      }
      console.log(err)
    }
  })
  }




}

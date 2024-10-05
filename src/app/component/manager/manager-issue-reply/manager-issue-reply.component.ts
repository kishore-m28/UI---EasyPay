import { Component, OnInit } from '@angular/core';
import { ManagerNavbarComponent } from "../manager-navbar/manager-navbar.component";
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../../service/manager.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manager-issue-reply',
  standalone: true,
  imports: [ManagerNavbarComponent, FormsModule],
  templateUrl: './manager-issue-reply.component.html',
  styleUrl: './manager-issue-reply.component.css'
})
export class ManagerIssueReplyComponent implements OnInit{

  id:number;
  employeeName:string='';
  description:string='';
  date:string='';
  replyMsg:string='';

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




}

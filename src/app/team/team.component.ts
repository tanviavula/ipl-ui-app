import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  label:string;
  constructor(private routes:ActivatedRoute) { }

  ngOnInit(): void {
      this.routes.paramMap.subscribe(paramMap=>{
        this.label = paramMap.get("label");
      })
  }

  

}

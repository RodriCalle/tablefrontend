import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {GraduatesApiService} from "../../services/graduates-api.service";
import {Router} from "@angular/router";
import {Graduation} from "../../models/graduation";

const dataexample: Graduation[] = [{"id":1,"year":2014,"sex":"Males","typeOfCourse":"Education","noOfGraduates":124}]


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GraduatesApiService]
})
export class HomeComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: String[] = ['year', 'sex', 'typeOfCourse', 'noOfGraduates'];

  constructor(/*private apiService: GraduatesApiService,*/ private router: Router) {
  }

  ngOnInit(): void {
    /*this.apiService.getAllGraduations().subscribe((response: any) => {
      console.log(response);
      this.dataSource.data = response;
    });*/
    this.dataSource.data = dataexample;
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  // template: `
  // <div class="col-md-5">
  //   <table class="table table-responsive table-striped table-compact">
  //     <thead> 
  //       <th> ID </th>
  //       <th> First Name</th>
  //       <th> Last Name</th>
  //     </thead>
  //     <tbody *ngIf="isLoading">
  //       <tr>
  //         <td> </td> 
  //         <td class="text-center"> ... Loading data </td>
  //         <td> </td> 
  //       </tr>
  //       <tr *ngFor="let x of [1,2,3]">
  //         <td> ... </td>
  //         <td> ... </td>
  //         <td> ... </td>
  //       </tr>
  //     </tbody>
  //     <tbody *ngIf="!isLoading">
  //       <tr *ngFor="let x of results$ | async">
  //         <td> {{x.id || 'N/A'}}</td>
  //         <td> {{x.firstName || 'N/A'}} </td>
  //         <td> {{x.lastName || 'N/A'}}</td>
  //       </tr>
  //     </tbody>
  //   </table>
  //   <section class="pagination"> 
  //     <button class="btn btn-sm btn-default" [disabled]="!results.length || isLoading || currentPage==0" (click)="goToPage('first')"> First</button>
  //     <button class="btn btn-sm btn-primary" [disabled]="!results.length || isLoading || currentPage==0" (click)="goToPage('previous')"> Previous</button>
  //     <button class="btn btn-sm btn-default" [disabled]="!results.length || isLoading || currentPage==totalPages-1" (click)="goToPage('next')"> Next</button>
  //     <button class="btn btn-sm btn-primary" [disabled]="!results.length || isLoading || currentPage==totalPages-1" (click)="goToPage('last')"> Last</button>
  //   </section>
  // </div>
  // `,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  url: string = "https://dummyjson.com/users";
  currentPage: number = 0;
  totalPages: number = 0;
  recordsPerPage: number = 10;
  results: any = [];
  results$: Observable<any>;
  isLoading: boolean = false;
  
  constructor(private ht:HttpClient) { }
  
  ngOnInit(): void {
    // this.fetchTableData(0)
  }
  fetchTableData(page:number):void{
    this.isLoading = true;
    let skip = page?page*this.recordsPerPage: page;
    this.results$ = this.ht.get(`${this.url}?skip=${skip}&limit=${this.recordsPerPage}`).pipe(
      map((res:any) =>{
        this.isLoading = false;
        this.totalPages = Math.ceil(res.total/this.recordsPerPage);
        return res.users
      }
      ),
      catchError((error, caught) =>caught)
    )
    this.results$.subscribe({
      next: (res) => this.results = res,
      error: err => console.log(err)
    })
  }
  
  goToPage(page:string):void{
    switch(page){
      case 'previous': this.currentPage = this.currentPage - 1;
      break;
      case 'next': this.currentPage = this.currentPage + 1;
      break;
      case 'last': this.currentPage = this.totalPages - 1;
      break;
      case 'first':
      default: 
        this.currentPage = 0
      break;
    }
    this.fetchTableData(this.currentPage)
  }
}

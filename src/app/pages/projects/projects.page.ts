
import { Component, inject, OnInit } from '@angular/core';
import { Api } from '../../core/services/api';
import { map, Observable, tap } from 'rxjs';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  standalone: false,
})
export class ProjectsPage implements OnInit {

  //Inject the service using the inject() function
  private apiService = inject(Api);

  //Declare an Observable variable to hold the stream
  projects!: Observable<any[]>;

  constructor() { }

  ngOnInit() {
    this.projects = this.apiService.getUsers().pipe(tap((rawResponse) => console.log(rawResponse)),  map((response: any) => response.products))
  }

}

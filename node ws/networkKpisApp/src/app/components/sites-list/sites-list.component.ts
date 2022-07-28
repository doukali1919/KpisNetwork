import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';


@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.css']
})
export class SitesListComponent implements OnInit {

  Sites:any = [];
  constructor(private crudService: CrudService) { }
  ngOnInit(): void {
    this.crudService.GetSites().subscribe(res => {
      console.log('result ',res)
      this.Sites =res;
    });    
  }

}

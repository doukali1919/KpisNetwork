import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { DgService } from 'src/app/service/dg.service';

@Component({
  selector: 'app-list2g',
  templateUrl: './list2g.component.html',
  styleUrls: ['./list2g.component.css']
})
export class List2gComponent implements OnInit {
  dg!:any[];
  constructor(private _serv2G:DgService) { }

  pages: number = 1;
  term: string = '';

  ngOnInit(): void {
    this.getAll2g()
  }

  getAll2g(){
    this._serv2G.getAll2G().subscribe(res=>{

      this.dg=res;
    })
  }
  
}

import { Component, OnInit } from '@angular/core';
import { TgService } from 'src/app/service/tg.service';

@Component({
  selector: 'app-list3g',
  templateUrl: './list3g.component.html',
  styleUrls: ['./list3g.component.css']
})
export class List3gComponent implements OnInit {

  tg!:any[];

  constructor(private _serv3G:TgService) { }

  ngOnInit(): void {
    this.getAll3g()
  }

  getAll3g(){
    this._serv3G.getAll3G().subscribe(res1=>{

      this.tg=res1;
    })
  }

}

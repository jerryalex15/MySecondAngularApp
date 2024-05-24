import { Component, OnInit } from '@angular/core';
import { AppareilService } from './../services/appareil.service';
import { ActivatedRoute} from '@angular/Router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  id?:number;
  name?:string;
  status?:string;
  constructor(private appareilService: AppareilService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id! = this.route.snapshot.params['id'];
    this.name =  this.appareilService.getAppareilById(+this.id!).name;
    this.status = this.appareilService.getAppareilById(+this.id!).status;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})

export class AppareilComponent implements OnInit {

  @Input()
  id!:number;

  @Input()
  index!:number;

  @Input()
  appareilName!: string;

  @Input()
  appareilStatus!:string;
  
  constructor(private appareilService : AppareilService) { }

  onSwitch(): void {
    if(this.appareilStatus === "allumé") this.appareilService.switchOffOne(this.index);
    else if(this.appareilStatus === "éteint") this.appareilService.switchOnOne(this.index);
  }

  ngOnInit(): void {
  }

  getStatus(): string{
    return this.appareilStatus;
  }

  getColor(): string{
    if(this.appareilStatus === 'éteint') return 'red';
    if(this.appareilStatus === 'allumé') return 'green';
    return 'black';
  }

}

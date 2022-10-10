import { Component, OnInit } from '@angular/core';
import { SoccerService } from 'src/app/services/soccer.service';


@Component({
  selector: 'app-soccer-list',
  templateUrl: './soccer-list.component.html',
  styleUrls: ['./soccer-list.component.css']
})
export class SoccerListComponent implements OnInit {

  matches:any[]=[];

  constructor(public soccerService: SoccerService) {
    if(this.soccerService.matches) {
      this.matches = this.soccerService.matches;
    }else{
      this.soccerService.getTodayMatches().then(data => {
        console.log('ENTRO')
        let aux: any; 
        aux = data
        this.matches = aux['response'];
        console.log(this.matches);
      })
    }
   }

  ngOnInit(): void {
  }

}

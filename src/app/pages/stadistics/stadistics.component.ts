import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SoccerService } from 'src/app/services/soccer.service';


@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.css']
})
export class StadisticsComponent implements OnInit {


  principal_data: any;
  lastH2H: any[]=[];
  homeStadistics: any;
  awayStadistics: any;
  predictions: any;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    public soccerService: SoccerService
  ) { 
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.soccerService.getMatch(params['id']).then(data => {
        this.principal_data = data;
        this.principal_data = this.principal_data['response'][0]
        /*this.soccerService.getHead2Head(this.principal_data.teams.home.id,this.principal_data.teams.away.id).then((data) => {
          let aux: any;
          aux = data;
          //this.lastH2H = aux['response'];
        })*/
        this.soccerService.getTeamStadistics(this.principal_data.league.season,this.principal_data.teams.home.id,this.principal_data.league.id).then((data) => {
          let aux: any;
          aux = data;
          this.homeStadistics = aux['response'];
          console.log(this.homeStadistics)
        })
        this.soccerService.getTeamStadistics(this.principal_data.league.season,this.principal_data.teams.away.id,this.principal_data.league.id).then((data) => {
          let aux: any;
          aux = data;
          this.awayStadistics = aux['response'];
        })
        this.soccerService.getStandings(this.principal_data.league.id,this.principal_data.league.season).then((data)=>{
          //console.table(data);
        })
        this.soccerService.getPredictions(params['id']).then((data)=>{
          console.table(data);
          let aux: any;
          aux = data;
          this.predictions = aux['response'][0];
          this.lastH2H = this.predictions.h2h
        })
      })
    }
    )
  }
  

}

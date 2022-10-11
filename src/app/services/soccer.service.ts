import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SoccerService {
  url = 'https://v3.football.api-sports.io'
  myDate = new Date();
  matches: any;

  constructor(private http: HttpClient) { }

  getTodayMatches(){
    const today = this.formatDate()
    console.log(today)
    const finalURL = this.url+'/fixtures?date='+today+'&status=NS'
    const headers ={
      'x-rapidapi-host' : 'v3.football.api-sports.io',
      'x-rapidapi-key' : '8ab53d4980e115be6053b158622dba48'
    }

    return this.http.get(finalURL,{headers}).toPromise()
  }
  getMatch(id_match:any){
    const finalURL = this.url +'/fixtures?id='+id_match
    const headers ={
      'x-rapidapi-host' : 'v3.football.api-sports.io',
      'x-rapidapi-key' : '8ab53d4980e115be6053b158622dba48'
    }
    return this.http.get(finalURL,{headers}).toPromise()
  }

  getHead2Head(id1:any, id2:any){
    const finalURL = this.url +'/fixtures/headtohead?h2h='+id1+"-"+id2;
    const headers ={
      'x-rapidapi-host' : 'v3.football.api-sports.io',
      'x-rapidapi-key' : '8ab53d4980e115be6053b158622dba48'
    }
    return this.http.get(finalURL,{headers}).toPromise()
  }
  getTeamStadistics(season:any,team_id:any,league_id:any){
    const finalURL = this.url +'/teams/statistics?season='+season+'&team='+team_id+'&league='+league_id;
    const headers ={
      'x-rapidapi-host' : 'v3.football.api-sports.io',
      'x-rapidapi-key' : '8ab53d4980e115be6053b158622dba48'
    }
    return this.http.get(finalURL,{headers}).toPromise()
  }
  getStandings(league:any,season:any){
    const finalURL = this.url +'/standings?league='+league+'&season='+season;
    const headers ={
      'x-rapidapi-host' : 'v3.football.api-sports.io',
      'x-rapidapi-key' : '8ab53d4980e115be6053b158622dba48'
    }
    return this.http.get(finalURL,{headers}).toPromise()
  }
  getPredictions(match:any){
    const finalURL = this.url +'/predictions?fixture='+match;
    const headers ={
      'x-rapidapi-host' : 'v3.football.api-sports.io',
      'x-rapidapi-key' : '8ab53d4980e115be6053b158622dba48'
    }
    return this.http.get(finalURL,{headers}).toPromise()
  }

  formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 
}

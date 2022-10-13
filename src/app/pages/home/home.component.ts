import { Component, OnInit } from '@angular/core';
import { SoccerService } from 'src/app/services/soccer.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  firsts:any[]=[];

  constructor(public soccerService: SoccerService,private router: Router) {
    this.soccerService.getTodayMatches().then((response)=>{
      this.soccerService.matches = response;
      console.log(this.soccerService.matches['response'])
      this.firsts = this.soccerService.matches['response'].slice(0,3);
    console.log(this.firsts);
  })
   }

  ngOnInit(): void {

  }

  goToStadistics(match:any){
    console.log(match);
  }

  goToSoccerList(){
    this.router.navigate(['soccer-list']);
  }

  myFunction() {
    let aux:any;
    aux = document.getElementById("myLinks");
    if (aux.style.display === "block") {
      aux.style.display = "none";
    } else {
      aux.style.display = "block";
    }
  }
   
}

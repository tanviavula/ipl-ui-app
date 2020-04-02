import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface LabelDTO{
    labels:string[]
}
interface Player{
  label: string,
  name: string,
  price: number,
  role: string
}

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnDestroy,OnInit{

  title = "Leanring Angular is fun!";
  disable = true;
  name = "Default text";
  users = ["Lakshman", "Rajesh", "Krish"];
  user = "";
  labelDto:LabelDTO;
  teamName="";
  players:Player[] = [];
  constructor(private http:HttpClient) {
      
   }
  
  ngOnDestroy(): void {
    console.log("Destory.....");
  }

  ngOnInit(): void {
    console.log("ng on init");
    setTimeout(() => {
      this.disable = false;
      this.name = this.name.toUpperCase();
    }, 3000);

    this.http
    .get<LabelDTO>("https://indipl2020.herokuapp.com/ipl2020/team/labels")
    .subscribe(data=>{
        this.labelDto = data;
        
    })
  }
 
  showTeamDetails(){
    if(this.teamName.trim().length > 0){
        this.http.get<Player[]>(`https://indipl2020.herokuapp.com/ipl2020/team/${this.teamName}`)
        .subscribe(res=>{
            this.players = res;
        })
    }
  }
   
 

  showGreetings() {
    window.alert("Have a nice Day!....");
  }

  addUser() {
    if (this.user.trim().length > 0) {
      this.users.push(this.user);
      this.user = "";
    }
  }
  deleteUser(user: string) {
    let res = window.confirm("Are you sure do you want to delete " + user + "?");
    if (res) {
      this.users = this.users.filter(ele => ele !== user);
    }
  }
  editUser(user: string) {
    this.users = this.users.filter(ele => ele !== user);
    this.user = user;
  }


}

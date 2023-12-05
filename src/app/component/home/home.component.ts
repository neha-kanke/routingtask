import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _route:Router
    
    
    ) { }

  ngOnInit(): void {
  }


  onadduser(){
    this._route.navigate(['/abouts'])  // it is callled as progromatic routing
  }

}

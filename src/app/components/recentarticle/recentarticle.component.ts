import { Component, OnInit } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-recentarticle',
  templateUrl: './recentarticle.component.html',
  styleUrls: ['./recentarticle.component.css']
})
export class RecentarticleComponent implements OnInit {
  recentArticles=[]
  constructor() { }

  ngOnInit() {
    axios.get(`http://localhost:3000/article/recent`).then(data=>{
      this.recentArticles=data.data.data;
    })
  }

}

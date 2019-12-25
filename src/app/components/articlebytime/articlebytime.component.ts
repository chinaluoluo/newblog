import { Component, OnInit } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-articlebytime',
  templateUrl: './articlebytime.component.html',
  styleUrls: ['./articlebytime.component.css']
})
export class ArticlebytimeComponent implements OnInit {
  bytimeArticles: [];
  constructor() { }

  ngOnInit() {
    axios.get(`http://localhost:3000/article/bytime`).then(data=>{
      this.bytimeArticles=data.data.data;
    })
  }

}
 
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
import angular from 'angular';
import ngInfiniteScroll from 'ng-infinite-scroll';
const MODULE_NAME = 'qwe';
angular.module(MODULE_NAME, [ngInfiniteScroll]);
export default MODULE_NAME;

@Component({ 
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  articles:any=[];
  offset=0;
  size=6;
  filter={};
  y = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.y = param.y;
      this.offset=0;
      this.articles=[];
      this.nextPage()
    });
    
  }
  nextPage(){
     if(!this.y){
      if(this.offset<=this.articles.length){
        axios.get(`http://localhost:3000/article?offset=${this.offset}&size=${this.size}`).then(data=>{
          this.articles=[...this.articles,...data.data.data];
          this.offset=this.offset+this.size
          })
      }
     }
    else{
    this.load()
    }
  }
  load(){
    if(this.offset<=this.articles.length){
    axios.get(`http://localhost:3000/article?offset=${this.offset}&size=${this.size}&filter=${this.y}`).then(data=>{
      this.articles=[...this.articles,...data.data.data];
      this.offset=this.offset+this.size
    })
  }

  }

}

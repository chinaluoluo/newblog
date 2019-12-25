import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { CanActivate } from "@angular/router";
@Component({
  selector: 'app-articleeditor',
  templateUrl: './articleeditor.component.html',
  styleUrls: ['./articleeditor.component.css']
})
export class ArticleeditorComponent implements OnInit {
  articles:any=[];
  offset=0;
  size=18;
  filter={};
  displayedColumns: string[] = ['id', 'title', 'content', 'createdAt','delete'];
  dataSource = this.articles;
  constructor() { }

  ngOnInit() {
    this.nextPage()
  }
  deletethis(id){
    axios.delete('http://localhost:3000/article',{data:id}).then(data=>{
        this.offset=0;
        this.articles=[];
        this.nextPage()
      })
  }
  nextPage(){
      if(this.offset<=this.articles.length){
        axios.get(`http://localhost:3000/article?offset=${this.offset}&size=${this.size}`).then(data=>{
          this.articles=[...this.articles,...data.data.data];
          this.offset=this.offset+this.size
          this.dataSource = this.articles;
          })
      }

  }

}

export class LoginGuard implements CanActivate{
  canActivate(){
    if (window.localStorage.getItem("userid") == '2') {
        return true
    } else {
      return false;
    }
    return false;
  }
}

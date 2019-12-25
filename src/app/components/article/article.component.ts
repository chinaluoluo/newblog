import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article={};
  id=null
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = 0;
    this.activatedRoute.params.subscribe(param => {
      this.id = param.id;
      axios.get(`http://localhost:3000/article/${this.id}`).then(data=>{
        this.article=data.data.data[0]
      })
    });
  }

}


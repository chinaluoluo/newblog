import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-articleshow',
  templateUrl: './articleshow.component.html',
  styleUrls: ['./articleshow.component.css']
})
export class ArticleshowComponent implements OnInit {
  @Input() article:any;

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

}

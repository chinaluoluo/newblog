import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {
  id=null;
  article={
    articleid:null,
    title:"",
    content: "",
    target:""
  };
  constructor(private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      
      this.id = param.id;
      if(this.id){
        axios.get(`http://localhost:3000/article/${this.id}`).then(data=>{
          this.article=data.data.data[0]
        })
      } 
    });
  }
  donotning(){

  }
  createarticle(){
    axios.post('http://localhost:3000/article',{data: this.article}).then((res:any)=>{
        if(res.err){
          alert("请重试")
        }
        else{
          alert("成功")
          this.router.navigate(['/'])
        }
      }).catch(err=>{
        console.log(err)
      })
  }

}

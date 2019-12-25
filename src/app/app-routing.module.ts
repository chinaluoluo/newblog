import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './components/articleeditor/articleeditor.component';

import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleeditorComponent } from './components/articleeditor/articleeditor.component';
import { AddarticleComponent } from './components/addarticle/addarticle.component';

const routes: Routes = [
  {
    path:'article/edit/:id',
    component:AddarticleComponent
  },
  {
    path:'article/add',
    component:AddarticleComponent
  },
  {
    path:'article/:id',
    component:ArticleComponent
  },
 
  {
    path:'admin',
    component:ArticleeditorComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'bytime/:y',
    component:MainpageComponent
  },
  {
    path:'**',
    component:MainpageComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

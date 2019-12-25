import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopnavComponent } from './components/topnav/topnav.component';
import { MatDialogModule } from '@angular/material/dialog'
import { DialogContentExampleDialog } from './components/topnav/topnav.component';
import { RegisterDialog } from './components/topnav/topnav.component';
import { MatFormFieldModule,MatInputModule,MatTableModule } from '@angular/material';
import{CdkTableModule} from '@angular/cdk/table'

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FormsModule } from '@angular/forms';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { RecentarticleComponent } from './components/recentarticle/recentarticle.component';
import { ArticlebytimeComponent } from './components/articlebytime/articlebytime.component';
import { ArticleshowComponent } from './components/articleshow/articleshow.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleeditorComponent } from './components/articleeditor/articleeditor.component';
import { AddarticleComponent } from './components/addarticle/addarticle.component';

import {MatIconModule} from '@angular/material'
import {MatButtonModule} from '@angular/material'

import { QuillModule } from 'ngx-quill'

import { UMeditorModule } from 'ngx-umeditor';
import { LoginGuard } from './components/articleeditor/articleeditor.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    DialogContentExampleDialog,
    RegisterDialog,
    MainpageComponent,
    RecentarticleComponent,
    ArticlebytimeComponent,
    ArticleshowComponent,
    ArticleComponent,
    ArticleeditorComponent,
    AddarticleComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    InfiniteScrollModule,
    MatTableModule,
    CdkTableModule,
    MatIconModule,
    QuillModule.forRoot(),
    UMeditorModule.forRoot(),
    MatButtonModule
    
    
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent],
  entryComponents:[DialogContentExampleDialog,RegisterDialog],
  
})

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);

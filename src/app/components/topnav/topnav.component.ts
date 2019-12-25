import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import axios from 'axios'
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  users={
    id:"",
    username:"",
    password:"",
    issign:false
  };
  constructor(public dialog: MatDialog) { }

  async ngOnInit () {
    let res= await axios.get("http://localhost:3000/users/login",{withCredentials: true});
    if(res.data.data){
      this.users.issign=true
      this.users.username=res.data.data[0].username
      this.users.id=res.data.data[0].id
      window.localStorage.setItem("userid",this.users.id);
    }

  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.users=result;
    });
  }
  openDialog2(){
    const dialogRef = this.dialog.open(RegisterDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.users=result;
    });
  }
  signout(){
    this.users={
      id:"",
      username:"",
      password:"",
      issign:false
    }
    axios.delete('http://localhost:3000/users/login',{withCredentials: true});
    
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  template: `
  <h2 mat-dialog-title>登录</h2>
    <mat-dialog-content class="mat-typography">

      <mat-form-field class="example-full-width">
        <input matInput [(ngModel)]="user.username" class="example-full-input" placeholder="UserName">
      </mat-form-field>
      
      <mat-form-field class="example-full-width">
        <input matInput [(ngModel)]="user.password" class="example-full-input" placeholder="password">
      </mat-form-field>
    </mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-button mat-dialog-close>取消</button>
    <button mat-button (click)="signin()"  [mat-dialog-close]="user">登录</button>
  </mat-dialog-actions>`,
})

export class DialogContentExampleDialog {
  user={
    id:"",
    username:"",
    password:"",
    issign:false
  }
  signin(){
    axios.post("http://localhost:3000/users/login",{data:{username:this.user.username,password:this.user.password}},{withCredentials: true}).then(res=>{
      if(res.data.err){
        alert("密码不正确")
        this.user.issign=false
      }
      else{
        alert("登录成功")
        console.log(res.data.data)
        this.user.username=res.data.data[0].username
        this.user.id=res.data.data[0].id
        this.user.issign=true
        window.localStorage.setItem("userid",this.user.id);
      }
    })
  }
}


@Component({
  selector: 'register-dialog',
  template: `
  <h2 mat-dialog-title>注册</h2>
    <mat-dialog-content class="mat-typography">

      <mat-form-field class="example-full-width">
        <input matInput [(ngModel)]="user.username" class="example-full-input" placeholder="UserName">
      </mat-form-field>
      
      <mat-form-field class="example-full-width">
        <input matInput [(ngModel)]="user.password" class="example-full-input" placeholder="password">
      </mat-form-field>
    </mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-button mat-dialog-close>取消</button>
    <button mat-button (click)="register()"  [mat-dialog-close]="user">注册</button>
  </mat-dialog-actions>`,
})
export class RegisterDialog {
  user={
    id:"",
    username:"",
    password:""
  }
  
  register(){

  }
}


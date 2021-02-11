import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'custom-captcha';
  captcha: number;
  _show: boolean = false;

  ngOnInit(): void {
    this.refreshCaptcha();
  }
  refresh() {
    this.refreshCaptcha();
  }
  validate() {
    let val = ((document.getElementById("incaptcha") as HTMLInputElement).value);
    if (val == this.captcha.toString()) {
      alert("login successful");
      ((document.getElementById("incaptcha") as HTMLInputElement).value) = "";
      this.refreshCaptcha();
      this._show = false;
    } else {
      alert("please enter valid captcha");
      this.refreshCaptcha();
    }
  }
  showCaptcha() {
    this._show = true;
  }
  refreshCaptcha() {
    this.captcha = Math.floor(Math.random() * 1001232) + 1;
  }
}

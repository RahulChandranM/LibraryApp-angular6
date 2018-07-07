import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  @Output() closeLoginModal: EventEmitter<any> = new EventEmitter();
  @Output() isUserLogin: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeLoginModalPopup() {
    this.closeLoginModal.emit();
  }

  userLogin() {
  }
}

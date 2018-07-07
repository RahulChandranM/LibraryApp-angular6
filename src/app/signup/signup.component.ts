import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() closeSignUpModal: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeSignUpModalPopup() {
    this.closeSignUpModal.emit();
  }
}

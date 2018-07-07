import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isLoginModalOpen;
  isSignUpModalOpen;
  openLoginModal() {
    this.isLoginModalOpen = true;
  }

  openSignUpModal() {
    this.isSignUpModalOpen = true;
  }

  closingLoginModalFromLanding() {
    this.isLoginModalOpen = false;
  }

  closingSignUpModalFromLanding() {
    this.isSignUpModalOpen = false;
  }

}

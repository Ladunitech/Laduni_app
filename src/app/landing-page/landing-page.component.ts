import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }


  ToggleNavBar() {
    let element: HTMLElement = document.getElementsByClassName('navbar-toggler')[0] as HTMLElement;
    if (element.getAttribute('aria-expanded') == 'true') {
      element.click();
    }
  }

  onSubscribe(): void {
    window.open("https://tech.us6.list-manage.com/subscribe/post?u=9827b55b2af4c603f84d06a28&amp;id=93e18d797b", "_blank");
  }

}

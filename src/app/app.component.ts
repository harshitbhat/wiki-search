import { Component } from '@angular/core';
import { WikipediaService } from './services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private wikipediaService: WikipediaService) {}

  onTerm(term: string) {
    this.wikipediaService.search(term).subscribe((response) => {
      console.log(response);
    });
  }
}

/*

Test url:

https://en.wikipedia.org/w/api.php?
  action=query&
  format=json&
  list=search&
  utf8=1&
  srsearch=space


*/

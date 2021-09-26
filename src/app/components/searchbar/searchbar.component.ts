import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term = '';

  constructor() {}

  ngOnInit(): void {}

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.term = target.value;
  }

  onFormSumit(event: Event) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}

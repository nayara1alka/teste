import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-danger',
  templateUrl: './alert-danger.component.html',
  styleUrls: ['./alert-danger.component.css']
})
export class AlertDangerComponent implements OnInit {

  @Input() type? = 'danger';
  @Input() message? :string;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-row',
  templateUrl: './content-row.component.html',
  styleUrls: ['./content-row.component.sass']
})
export class ContentRowComponent implements OnInit {

  @Input() content;

  row: [];

  constructor() { }

  ngOnInit(): void {
  }

}

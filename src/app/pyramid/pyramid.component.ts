import { Component, OnInit } from '@angular/core';
import { PyramidRow } from '../pyramid-rows/pyramid-row.service';
import { Animal } from '../Animal.model';
@Component({
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css'],
  selector: 'app-pyramid'
})
export class PyramidComponent implements OnInit {
  pyramid : Animal[][];
  constructor(private pyramidRow : PyramidRow) {
    this.pyramid = [
      this.pyramidRow.getLevel1(),
      this.pyramidRow.getLevel2(),
      this.pyramidRow.getLevel3(),
      this.pyramidRow.getLevel4(),
      this.pyramidRow.getLevel5(),
    ];
  }
  ngOnInit() {
  }
}

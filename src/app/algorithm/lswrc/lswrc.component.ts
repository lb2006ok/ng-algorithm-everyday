import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-lswrc',
  templateUrl: './lswrc.component.html',
  styleUrls: ['./lswrc.component.css']
})
export class LSWRCComponent implements OnInit {
  str: string;
  result: string;
  code: string = `
  lengthOfLongestSubstring(str) {
    const map = {};
    var left = 0;

    return str.split('').reduce((max, v, i) => {
      left = map[v] >= left ? map[v] + 1 : left;
      map[v] = i;
      return Math.max(max, i - left + 1);
    }, 0);
  }
}`;

  constructor() {

  }

  ngOnInit() {

  }

  handleChange(e) {
    this.result = this.lengthOfLongestSubstring(e.target.value);
  }

  lengthOfLongestSubstring(str) {
    const map = {};
    var left = 0;

    return str.split('').reduce((max, v, i) => {
      left = map[v] >= left ? map[v] + 1 : left;
      map[v] = i;
      return Math.max(max, i - left + 1);
    }, 0);
  }
}

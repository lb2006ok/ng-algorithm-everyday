import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cwmw',
  templateUrl: './cwmw.component.html',
  styleUrls: ['./cwmw.component.css']
})
export class CwmwComponent implements OnInit {
  result: any;
  code: string = `maxArea(arr: any) {
    arr = arr.split(',');
    let max = 0;
    for(let head = 0, tail = height.length -1; head < tail; ){
      max = Math.max(max, (tail-head) * Math.min(height[head], height[tail]));
      height[head] > height[tail] ? tail-- : head++;
    }
    return max
  }`;

  constructor() {

  }

  ngOnInit() {

  }

  handleChange(e) {
    this.result = this.maxArea(e.target.value);
  }

  maxArea(arr: any) {
    arr = arr.split(',');
    let max = 0;
    for(let head = 0, tail = arr.length -1; head < tail; ){
      max = Math.max(max, (tail-head) * Math.min(arr[head], arr[tail]));
      arr[head] > arr[tail] ? tail-- : head++;
    }
    return max
  };
}

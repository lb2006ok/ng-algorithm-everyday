import { Component, OnInit } from '@angular/core';
import BstModel from './bst.model';

@Component({
  selector: 'app-bst',
  templateUrl: './bst.component.html',
  styleUrls: ['./bst.component.css']
})
export class BSTComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    let nums = new BstModel();

    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);
    nums.remove(16);
    console.log(nums)
  }

}

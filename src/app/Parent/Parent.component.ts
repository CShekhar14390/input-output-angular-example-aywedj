import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-Parent',
  templateUrl: './Parent.component.html',
  styleUrls: ['./Parent.component.css']
})
export class ParentComponent implements OnInit {
  name = 'Angular';
  parent = 10;
  parentCount = 0;
  @Input() moneydetails;
  moneydetail = 100;
  car = 'yes';
  c1Name = 'Vani';
  c2Name = 'Rohit';
  c3Name = 'Kartik'
  @Output() valueChange = new EventEmitter();
  @ViewChild('c1') c1: ChildComponent;
  @ViewChild('c2') c2: Child2Component;

  ngOnInit() {}

  childNeed(evt) {
    return this.giveChildMoney(evt.no, evt.count);
  }

  giveChildMoney(no, count) {
    // set condition
    if (count > 10) {
      count = 10;
    }
    if (no == 1) {
      this.c1.moneydetails += count;
      this.c1.msg = `Spend wisely $ ${count}` as string;
      //this.c1.sayHi(); //+ add this function to child as excersize
    }
    if (no == 2) {
      this.c2.moneydetails += count;
      this.c2.msg2 = `Spend wisely $ ${count}` as string;
    }
    if (no == 3) {
      this.c1.moneydetails3 += count;
      this.c1.msg3 = `Spend wisely $ ${count}` as string;
    }
    this.moneydetail -= count;
    return count;
  }
  backChildMoney(no) {
    if (no == 1) {
      this.c1.moneydetails -= 10;
      this.moneydetail += 10;
    }

    if (no == 2) {
      this.c2.moneydetails -= 10;
      this.moneydetail += 10;
    }
    if (no == 3) {
      this.c1.moneydetails3 -= 10;
      this.moneydetail += 10;
    }

  }
}

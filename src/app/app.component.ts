import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';
  count = 0;
  count1 = 0
  count2= 0;
  count3 = 0;
  count4 = 0;
  count5 = 0;
  count6 = 0;
  count7 = 0;
  count8 = 0;
  count9 = 0;
  counter ()
  {
    this.count++
    console.warn(this.count)
  }
  counter1 ()
  {
    this.count1++
    console.warn(this.count)
  }
  counter2 ()
  {
    this.count2++
    console.warn(this.count)
  }
  counter3 ()
  {
    this.count3++
    console.warn(this.count)
  }
  counter4 ()
  {
    this.count4++
    console.warn(this.count)
  }
  counter5 ()
  {
    this.count5--
    console.warn(this.count)
  }
  counter6 ()
  {
    this.count6--
    console.warn(this.count)
  }
  counter7()
  {
    this.count7--
    console.warn(this.count)
  }
  counter8 ()
  {
    this.count8--
    console.warn(this.count)
  }
  counter9 ()
  {
    this.count9--
    console.warn(this.count)
  }


}

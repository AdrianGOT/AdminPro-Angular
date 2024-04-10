import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, map, interval, take, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: ``
})
export class RxjsComponent implements OnDestroy{

  private intervalSubscription: Subscription = new Subscription();

  constructor(){

    // this.returnObserver$().pipe(

    //   retry(1)

    // ).subscribe(
    //   value => console.log('Sub: ', value),
    //   ()=> console.log("has an error"),
    //   ()=> console.info('Observer had finish its task!')
    // )

    this.intervalSubscription = this.returnInterval().subscribe(
      (value)=> console.log(value)
    );

  }

  returnInterval(): Observable<String>{
    // return  interval(100)
    //   .pipe(
    //     map( value => 'hola mundo ' + (value + 1) ),
    //     take(10), // Take only ten values, after that the observable finish
    //     filter(value => +value.split(' ')[2] % 2 === 0 ),
    //   )

    return  interval(100)
    .pipe(
      map( value => 'hola mundo ' + (value + 1) ),
      // take(10), // Take only ten values, after that the observable finish
      filter(value => +value.split(' ')[2] % 2 === 0 ),
    )
  }


  returnObserver$(): Observable<number>{
    let i = -1;

    return new Observable<number>( Observer => {
      const interval = setInterval(()=>{
        i++;
        Observer.next(i);

        if(i === 4) {
          clearInterval(interval);
          Observer.complete();
        }
        if(i==2){
          i = 0;
          Observer.error('Error with 2');
        }


      }, 1000);
    });

  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: ``
})
export class PromisesComponent implements OnInit{

  ngOnInit(): void {
    this.getUsers().then(resp => console.log(resp));
    // const promise = new Promise((resolve, reject) => {
    //   if(false)resolve('Hello world');
    //   else reject('the server is fall');
    // })

    // promise
    //   .then((msg)=> console.log('hey, I finished! and this is the message' + msg) )
    //   .catch((msg) => console.log('hey!, Something is going wrong and here is the error message ' + msg));
    // console.log('the end of the init');

  }

  private getUsers() {

    return new Promise(resolve => {

      const data = fetch('https://reqres.in/api/users?page=2').then((response =>  response.json() ));
      data.then(response => resolve(response.data));

    });



  }



}

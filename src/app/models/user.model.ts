export class User {
  constructor(
    public role     : string,
    public google   : boolean,
    public name     : string,
    public email    : string,
    public password : string,
    public img      : string,
    public uid      : string
  ){

  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: ``
})
export class BreadcrumbsComponent {
  title: string = '';

  constructor(private router: Router, private routeActived: ActivatedRoute){
    this.getRouteSelected$().subscribe(pageTitle => this.title = pageTitle);
  }

  private getRouteSelected$(): Observable<string>{
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event) => !(event as any as ActivationEnd).snapshot.firstChild),
      map( event =>  (event as any as ActivationEnd).snapshot.data['title'] )
    )
  }
}

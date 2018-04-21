import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {UrlSegment} from '@angular/router/src/url_tree';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

@Injectable()
export class PageTemplateResolve implements Resolve<any> {

  constructor(private http: Http) { }

  public resolve(route: ActivatedRouteSnapshot) {
    const pageCode = route.params['pageCode'];
    const requestUrl = `http://demo0546275.mockable.io/template/${pageCode}`;

    return this.http.get(requestUrl).map(response => response.json());
  }
}

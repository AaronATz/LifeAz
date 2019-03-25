import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoadDataService {

  private url : string = "../data/dataMock.json";
  constructor(private http: HttpClient) { }

  public getJSON() : Observable<any> {
    return this.http.get(this.url);
  }

  public getFilteredData(term : any) : Observable<any> {
    return this.http
      .get(this.url)
      .pipe(
        map(result => result.filter(evt => evt.content.indexOf(term) > -1)),
      );
  }
}

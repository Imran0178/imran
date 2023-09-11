import { Injectable } from '@angular/core';
import { SingletonService } from './singleton.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    public http: HttpClient,
    public singleton: SingletonService,
  ) {}

  getData(url: any) {
    return this.http.get(`${this.singleton.baseAPIUrl}/${url}`);
  }

  postData(url: any, data: any) {
    return this.http.post(`${this.singleton.baseAPIUrl}/${url}`, data);
  }
}

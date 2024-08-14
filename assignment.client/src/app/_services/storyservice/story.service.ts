import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { environment } from '../../_model/environment';

export interface StoryItemDetails {
  data: any[];
  statusCode?: number;
}

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  apiUrl = '';
  constructor(private http: HttpClient) {
    this.apiUrl = environment.baseUrl + 'api/Story/';
  }

  getDetail(takeRecord: number) {
    return this.http.get<any[]>(this.apiUrl + 'getstorydetails?takeRecord=' + takeRecord)
      .pipe(map(data => {
        return data;
      }));
  }
}

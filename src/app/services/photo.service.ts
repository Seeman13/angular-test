import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'

import { IPhoto } from '../common/interfaces'


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor (private http: HttpClient) {}

  getPhotos (skip: number = 0, until: number = 20): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos').pipe(
      map(records => records.slice(skip, until))
    )
  }

  getPhoto (id: string): Observable<IPhoto> {
    return this.http.get<IPhoto>(`https://jsonplaceholder.typicode.com/photos?id=${id}`).pipe(
      map(record => record[0])
    )
  }
}

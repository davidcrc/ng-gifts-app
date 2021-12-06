import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = '';
  private _history: string[] = [];

  constructor(private http: HttpClient) {}

  get history(): string[] {
    return [...this._history];
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
    }

    this.http
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&limit=3&q=dbz`
      )
      .subscribe((resp: any) => {
        console.log(resp.data);
      });
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private servicioUrl = 'https://api.giphy.com/v1/gifs/';
  private limit = 10;
  private apiKey: string = '';
  private _history: string[] = [];

  // TODO: change any for apropiated type
  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  get history(): string[] {
    return [...this._history];
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', this.limit)
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.servicioUrl}search`, { params })
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}

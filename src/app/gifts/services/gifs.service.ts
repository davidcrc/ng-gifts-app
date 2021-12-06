import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];

  get history(): string[] {
    return [...this._history];
  }

  buscarGifs(query: string) {
    this._history.unshift(query);

    console.log('hist', this._history);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class Api {
  private BASE_URL = 'https://script.google.com/macros/s/AKfycbzUL2aV8yLPpMLd1YmoKsAGUUQgqEKO-qCrymtJVc6nVIZ_xfKEi25nTm-2l3uucM5t/exec';

  constructor(private http: HttpClient) {}

  getInvitation(slug: string) {
    return this.http.get(`${this.BASE_URL}?slug=${slug}`);
  }

  submitRSVP(data: any) {
    return this.http.post(this.BASE_URL, data);
  }
}

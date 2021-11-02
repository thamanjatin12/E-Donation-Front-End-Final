import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donation } from './donation';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private linkToHit = "localhost:8080/donations/by-id";

  constructor(private http:HttpClient) { }

  getDonationsList(): Observable<Donation[]>{
    return this.http.get<Donation[]>(`${this.linkToHit}`);
  }

  getDonationById(id: number): Observable<Donation>{
    return this.http.get<Donation>(`${this.linkToHit}/${id}`);
  } 
}

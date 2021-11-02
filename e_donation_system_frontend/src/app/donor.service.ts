import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donation } from './donation';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  private baseUrl = "http://localhost:8080/e-donation/api/v1";
  private testUrl = "http://localhost:3000/donation";

  constructor(private http:HttpClient) { }


}

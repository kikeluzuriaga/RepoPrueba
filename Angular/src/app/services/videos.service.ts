import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Video {
  videoName: string,
  videoDescription: string
}

@Injectable({
  providedIn: 'root'
})



export class VideosService {
  private baseUrl: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/videos";

  }






}

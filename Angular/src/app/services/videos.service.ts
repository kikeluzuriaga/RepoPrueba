import { Injectable } from '@angular/core';

export interface Video {
  videoName: string,
  videoDescription: string
}

@Injectable({
  providedIn: 'root'
})



export class VideosService {

  constructor() { }
}

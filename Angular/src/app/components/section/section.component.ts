import { Component, OnInit } from '@angular/core';
import { Video, VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  arrayVideos: Video[];

  constructor(
    private VideosService: VideosService
  ) {
    this.arrayVideos = [];
  }

  ngOnInit(): void {
    //necesitamos reecuperar todos los vídeos y skills pero las promesas que he intentado no han funcionado bien




  }

}

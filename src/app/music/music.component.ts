import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItuneService } from '../model/itune-service';
import { Music } from '../model/music.model';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private ituneService: ItuneService) {
    this.route.params.subscribe(params =>{
      if(params['id']){
        console.log(params['id']); 
        this.getMusic(params['id']);     
      }
    })
   }

  ngOnInit(): void {
  }

  /*@Input()
  public mus: Music[] = this.ituneService.listMusic;*/

  getMusic(musicId: Number){
    this.ituneService.getOneMusic(musicId);
  }
}

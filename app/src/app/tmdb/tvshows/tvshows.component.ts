import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TvShows } from 'src/models/tmdb.model';
import { TmdbService } from 'src/tmdb.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {
  findTvShowsbyNameForm : FormGroup= new FormGroup({
    findTvShowsByName: new FormControl (null, [Validators.min(0), Validators.required]),
  });
  
  tvShows : TvShows[];
  constructor(private tmdbService : TmdbService) { }

  ngOnInit(): void {
  }

  findTvShowByName(){
    let name = this.findTvShowsbyNameForm.controls?.['findTvShowsByName'].value;
    this.getTvShowsbyName(name);
  }

  getTvShowsbyName(name : string){
    this.tmdbService.getTvShowsByName(name).subscribe({
      next:(resp)=>{
        this.tvShows = resp;
        console.log(this.tvShows);
        
      }
    })
  }
}

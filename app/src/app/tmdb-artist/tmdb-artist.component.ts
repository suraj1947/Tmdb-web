import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/models/tmdb.model';
import { TmdbService } from 'src/tmdb.service';

@Component({
  selector: 'app-tmdb-artist',
  templateUrl: './tmdb-artist.component.html',
  styleUrls: ['./tmdb-artist.component.css']
})
export class TmdbArtistComponent implements OnInit {
  actors:Actor[];
  findArtistbyNameForm: FormGroup = new FormGroup({
    findByName: new FormControl('', [Validators.min(0), Validators.required]),
  });

  constructor(private tmdbService : TmdbService) { }

  ngOnInit(): void {
  }
findArtristByName() {
    let name = this.findArtistbyNameForm?.controls?.['findByName'].value;
    this.findByName(name);
  }

  findByName(name: string) {
    this.tmdbService.getActorByName(name).subscribe({
      next: (resp) => {
        this.actors = resp;
      },
      error(){
        "No records found for the mentiond ID"
      }
    });
  }
}

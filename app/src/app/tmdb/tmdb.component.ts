import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Actor, Person } from 'src/models/tmdb.model';
import { TmdbService } from 'src/tmdb.service';

@Component({
  selector: 'app-tmdb',
  templateUrl: './tmdb.component.html',
  styleUrls: ['./tmdb.component.css']
})
export class TmdbComponent implements OnInit {

  person: Person | undefined;

  findArtistbyIdForm : FormGroup = new FormGroup({
    findById : new FormControl(null,[
      Validators.min(0),
      Validators.required]),
  });

  constructor(private tmdbService :TmdbService) { }

  ngOnInit(): void {
  }

  findArtristById(){
    let id = this.findArtistbyIdForm?.controls?.['findById'].value;
    this.findById(id)
  }

  findById(id:string){
    this.tmdbService.getPersonById(id).subscribe({
      next:(resp)=>{
        this.person = resp;
        this.tmdbService.person.next(this.person)
      }
    })
  }
}

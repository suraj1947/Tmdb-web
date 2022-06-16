import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdbArtistComponent } from './tmdb-artist.component';

describe('TmdbArtistComponent', () => {
  let component: TmdbArtistComponent;
  let fixture: ComponentFixture<TmdbArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmdbArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

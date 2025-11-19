import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmAdministation } from './film-administation';

describe('FilmAdministation', () => {
  let component: FilmAdministation;
  let fixture: ComponentFixture<FilmAdministation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmAdministation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmAdministation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailFilm } from './detail-film';

describe('DetailFilm', () => {
  let component: DetailFilm;
  let fixture: ComponentFixture<DetailFilm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailFilm],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailFilm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

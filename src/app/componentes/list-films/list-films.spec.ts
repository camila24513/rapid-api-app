import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListFilms } from './list-films';

describe('ListFilms', () => {
  let component: ListFilms;
  let fixture: ComponentFixture<ListFilms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFilms],
    }).compileComponents();

    fixture = TestBed.createComponent(ListFilms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

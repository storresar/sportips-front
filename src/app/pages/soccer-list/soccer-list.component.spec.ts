import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerListComponent } from './soccer-list.component';

describe('SoccerListComponent', () => {
  let component: SoccerListComponent;
  let fixture: ComponentFixture<SoccerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoccerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoccerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

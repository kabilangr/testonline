import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeendComponent } from './homeend.component';

describe('HomeendComponent', () => {
  let component: HomeendComponent;
  let fixture: ComponentFixture<HomeendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

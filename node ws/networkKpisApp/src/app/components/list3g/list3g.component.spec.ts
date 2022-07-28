import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List3gComponent } from './list3g.component';

describe('List3gComponent', () => {
  let component: List3gComponent;
  let fixture: ComponentFixture<List3gComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List3gComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(List3gComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

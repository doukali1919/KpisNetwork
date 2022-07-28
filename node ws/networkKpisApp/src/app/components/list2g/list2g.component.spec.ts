import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List2gComponent } from './list2g.component';

describe('List2gComponent', () => {
  let component: List2gComponent;
  let fixture: ComponentFixture<List2gComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List2gComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(List2gComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

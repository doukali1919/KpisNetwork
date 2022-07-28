import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSiteComponent } from './find-site.component';

describe('FindSiteComponent', () => {
  let component: FindSiteComponent;
  let fixture: ComponentFixture<FindSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

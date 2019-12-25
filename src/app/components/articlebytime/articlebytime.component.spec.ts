import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlebytimeComponent } from './articlebytime.component';

describe('ArticlebytimeComponent', () => {
  let component: ArticlebytimeComponent;
  let fixture: ComponentFixture<ArticlebytimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlebytimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlebytimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

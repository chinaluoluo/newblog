import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleeditorComponent } from './articleeditor.component';

describe('ArticleeditorComponent', () => {
  let component: ArticleeditorComponent;
  let fixture: ComponentFixture<ArticleeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleErrorComponent } from './handle-error.component';

describe('HandleErrorComponent', () => {
  let component: HandleErrorComponent;
  let fixture: ComponentFixture<HandleErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandleErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

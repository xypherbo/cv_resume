import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernComponent } from './modern.component';

describe('ModernComponent', () => {
  let component: ModernComponent;
  let fixture: ComponentFixture<ModernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

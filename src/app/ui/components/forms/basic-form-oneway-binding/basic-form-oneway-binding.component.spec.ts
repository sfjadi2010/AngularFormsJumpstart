import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormOnewayBindingComponent } from './basic-form-oneway-binding.component';

describe('BasicFormOnewayBindingComponent', () => {
  let component: BasicFormOnewayBindingComponent;
  let fixture: ComponentFixture<BasicFormOnewayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFormOnewayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFormOnewayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

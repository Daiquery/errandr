import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrandCreateComponent } from './errand-create.component';

describe('ErrandCreateComponent', () => {
  let component: ErrandCreateComponent;
  let fixture: ComponentFixture<ErrandCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrandCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrandCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PyramidComponent } from './pyramid.component';
describe('PyramidComponent', () => {
  let fixture: ComponentFixture<PyramidComponent>;
  let component: PyramidComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyramidComponent ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(PyramidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcardComponent } from './modalcard.component';

describe('ModalcardComponent', () => {
  let component: ModalcardComponent;
  let fixture: ComponentFixture<ModalcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

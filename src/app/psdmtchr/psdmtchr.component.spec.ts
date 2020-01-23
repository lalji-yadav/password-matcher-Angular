import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsdmtchrComponent } from './psdmtchr.component';

describe('PsdmtchrComponent', () => {
  let component: PsdmtchrComponent;
  let fixture: ComponentFixture<PsdmtchrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsdmtchrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsdmtchrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

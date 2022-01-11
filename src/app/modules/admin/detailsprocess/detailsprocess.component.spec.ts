import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsprocessComponent } from './detailsprocess.component';

describe('DetailsprocessComponent', () => {
  let component: DetailsprocessComponent;
  let fixture: ComponentFixture<DetailsprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsprocessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

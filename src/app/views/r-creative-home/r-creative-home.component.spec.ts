import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RCreativeHomeComponent } from './r-creative-home.component';

describe('RCreativeHomeComponent', () => {
  let component: RCreativeHomeComponent;
  let fixture: ComponentFixture<RCreativeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RCreativeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RCreativeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

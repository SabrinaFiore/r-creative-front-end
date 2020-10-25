import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RCreativeThreeSecondComponent } from './r-creative-three-second.component';

describe('RCreativeThreeSecondComponent', () => {
  let component: RCreativeThreeSecondComponent;
  let fixture: ComponentFixture<RCreativeThreeSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RCreativeThreeSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RCreativeThreeSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

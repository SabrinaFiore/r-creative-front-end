import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RCreativeThreeComponent } from './r-creative-three.component';

describe('RCreativeThreeComponent', () => {
  let component: RCreativeThreeComponent;
  let fixture: ComponentFixture<RCreativeThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RCreativeThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RCreativeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

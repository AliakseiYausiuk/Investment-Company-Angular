import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSystemComponent } from './tech-system.component';

describe('TechSystemComponent', () => {
  let component: TechSystemComponent;
  let fixture: ComponentFixture<TechSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

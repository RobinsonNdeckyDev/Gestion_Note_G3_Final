import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionEvaluationComponent } from '../gestion-evaluation/gestion-evaluation.component';
import { ProfsComponent } from './profs.component';
describe('ProfsComponent', () => {
  let component: ProfsComponent;
  let fixture: ComponentFixture<ProfsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfsComponent, GestionEvaluationComponent],
    });
    fixture = TestBed.createComponent(ProfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

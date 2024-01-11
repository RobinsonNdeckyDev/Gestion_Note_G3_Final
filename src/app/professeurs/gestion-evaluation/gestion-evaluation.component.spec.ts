import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserHeaderComponent } from 'src/app/header-footer/user-h-f/user-header/user-header.component';
import { GestionEvaluationComponent } from './gestion-evaluation.component';
import { UserFooterComponent } from 'src/app/header-footer/user-h-f/user-footer/user-footer.component';
describe('GestionEvaluationComponent', () => {
  let component: GestionEvaluationComponent;
  let fixture: ComponentFixture<GestionEvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionEvaluationComponent,UserHeaderComponent, UserFooterComponent],
    });
    fixture = TestBed.createComponent(GestionEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

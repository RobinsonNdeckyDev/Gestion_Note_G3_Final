import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GestionEtudiantsComponent } from './gestion-etudiants.component';

describe('GestionEtudiantsComponent', () => {
  let component: GestionEtudiantsComponent;
  let fixture: ComponentFixture<GestionEtudiantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionEtudiantsComponent,],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(GestionEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

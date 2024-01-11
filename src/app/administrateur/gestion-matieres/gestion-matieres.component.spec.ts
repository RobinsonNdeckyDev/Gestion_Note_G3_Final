import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GestionMatieresComponent } from './gestion-matieres.component';

describe('GestionMatieresComponent', () => {
  let component: GestionMatieresComponent;
  let fixture: ComponentFixture<GestionMatieresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionMatieresComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(GestionMatieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GestionProfsComponent } from './gestion-profs.component';

describe('GestionProfsComponent', () => {
  let component: GestionProfsComponent;
  let fixture: ComponentFixture<GestionProfsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProfsComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(GestionProfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

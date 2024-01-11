import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { EtudiantsComponent } from './etudiants.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EtudiantsComponent', () => {
  let component: EtudiantsComponent;
  let fixture: ComponentFixture<EtudiantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivatedRoute],
      declarations: [EtudiantsComponent],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(EtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

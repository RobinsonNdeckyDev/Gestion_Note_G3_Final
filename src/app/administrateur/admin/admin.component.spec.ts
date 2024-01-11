import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderAdminComponent } from 'src/app/header-footer/admin-h-f/header-admin/header-admin.component';
import { AdminComponent } from './admin.component';
import { FooterAdminComponent } from 'src/app/header-footer/admin-h-f/footer-admin/footer-admin.component';
import { GestionProfsComponent } from '../gestion-profs/gestion-profs.component';
describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent, GestionProfsComponent, HeaderAdminComponent,FooterAdminComponent]
    });
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserHeaderComponent } from 'src/app/header-footer/user-h-f/user-header/user-header.component';
import { NotesComponent } from './notes.component';
import { UserFooterComponent } from 'src/app/header-footer/user-h-f/user-footer/user-footer.component';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesComponent, UserHeaderComponent, UserFooterComponent]
    });
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

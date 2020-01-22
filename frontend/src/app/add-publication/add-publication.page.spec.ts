import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPublicationPage } from './add-publication.page';

describe('AddPublicationPage', () => {
  let component: AddPublicationPage;
  let fixture: ComponentFixture<AddPublicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPublicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPublicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

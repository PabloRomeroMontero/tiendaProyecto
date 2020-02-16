import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesarrolladorDeLaAppPage } from './desarrollador-de-la-app.page';

describe('DesarrolladorDeLaAppPage', () => {
  let component: DesarrolladorDeLaAppPage;
  let fixture: ComponentFixture<DesarrolladorDeLaAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrolladorDeLaAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesarrolladorDeLaAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

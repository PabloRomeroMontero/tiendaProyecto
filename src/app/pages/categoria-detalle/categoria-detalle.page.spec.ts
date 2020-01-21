import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriaDetallePage } from './categoria-detalle.page';

describe('CategoriaDetallePage', () => {
  let component: CategoriaDetallePage;
  let fixture: ComponentFixture<CategoriaDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

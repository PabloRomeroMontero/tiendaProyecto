import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArticulosDetallePage } from './articulos-detalle.page';

describe('ArticulosDetallePage', () => {
  let component: ArticulosDetallePage;
  let fixture: ComponentFixture<ArticulosDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticulosDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

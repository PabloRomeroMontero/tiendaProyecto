import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CestaCompraPage } from './cesta-compra.page';

describe('CestaCompraPage', () => {
  let component: CestaCompraPage;
  let fixture: ComponentFixture<CestaCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CestaCompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CestaCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

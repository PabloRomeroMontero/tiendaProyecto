import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe( params => {
      console.log(params);
    });
  }

}

import { Component, inject, OnInit } from '@angular/core';
import { IProducto } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent  implements OnInit {

  loanding: boolean = true;
  public product?: IProducto;

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService)


  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this._apiService.getProduct(params['id']).subscribe((data: IProducto) =>{
        this.product = data
        this.loanding = false
      })
    });
    
  }

}

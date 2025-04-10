import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {

  activeCategoryId: number =0;
  products:any [] =[];
  constructor(private activatedRoute : ActivatedRoute,private prdSrv: ProductService){
    this.activatedRoute.params.subscribe((res: { [key: string]: any }) => {
      debugger;
      this.activeCategoryId = res['id'];
      this.loadProducts();
    })
  }
  loadProducts(){
    this.prdSrv.getProductsByCategory(this.activeCategoryId).subscribe((res:any)=>{
      this.products = res.data
    })
  }
}

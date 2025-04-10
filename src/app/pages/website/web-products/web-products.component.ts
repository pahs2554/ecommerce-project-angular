import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'web-products-products',
  imports: [CommonModule],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css'
})
export class ProductsComponent {


  productList: any[]=[];
  categoryList: any[]=[];
  constructor(private prodSrv:ProductService,private router:Router){

  }

  navigateToProducts(id: number){
    this.router.navigate(['/products', id]);
  }

  ngOnInit(): void {
      this.getAllProducts();
      this.getAllCategory();
  }

  getAllProducts(){
    this.prodSrv.getProducts().subscribe((res:any)=>{
      debugger;
      this.productList = res.data;
    })
  }
  getAllCategory(){
    this.prodSrv.getCategory().subscribe((res:any)=>{
      this.categoryList = res.data
    })
  }


}

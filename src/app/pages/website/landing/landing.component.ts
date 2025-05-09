import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{

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

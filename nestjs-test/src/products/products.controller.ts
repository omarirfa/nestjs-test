import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

//Creating route products which goes to localhost:3000/products
@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService){}
	
	@Post()
	addProduct(
	//@Body('id') prodId: string,
	@Body('name') prodName: string, 
	@Body('bank') prodBank: string, 
	@Body('amount') prodAmount: number): any {
	const generatedId = this.productsService.insertProduct(prodName,prodBank,prodAmount);
	return{id: generatedId};	
		
		
	}
	
	// gets all the bank accounts
	@Get()
	getAllProducts(){
		return this.productsService.getProducts();
		
	}
	//gets product aka customer id
	@Get(':id')
	getProduct(@Param('id') prodId: string,){
		return this.productsService.getSingleProduct(prodId);
	}
	//updates the users name,id and amount even and returns null as response
	@Patch(':id')
	updateProduct(@Param('id') prodId: string, @Body('name') prodName: string, 
	@Body('bank') prodBank: string, 
	@Body('amount') prodAmount: number){
		this.productsService.updateProduct(prodId, prodName,prodBank,prodAmount);
		return null;
	}
	//deletes based on id
	@Delete(':id')
	removeProduct(@Param('id') prodId: string,){
		this.productsService.deleteProduct(prodId);
	}
	
}

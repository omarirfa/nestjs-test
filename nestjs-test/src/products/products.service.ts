import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

//pre populating with random data for test.
@Injectable()
export class ProductsService{
	private products: Product[] = [
	 {
    "id": "1",
    "name": "Arisha Barron",
	"bank": "TD",
	"amount":800 
  },
  {
    "id": "2",
    "name": "Branden Gibson",
	"bank": "CIBC",  
	"amount": 500
  },
  {
    "id": "3",
    "name": "Rhonda Church",
	"bank": "BMO",  
	"amount": 700
  },
  {
    "id": "4",
    "name": "Georgina Hazel",
	"bank": "RBC",  
	"amount": 900
  },
  { "id": "5",
    "name": "Arisha Barron",
	"bank": "Scotiabank",
  "amount":600 },
];	

	//add new product which needs, name,bank and amount.
	insertProduct(name: string, bank: string, amount: number) {
		const prodId = Math.random().toString();
		// if amount is not provided during an insert,a default amount is passed.
		if(!amount){
			var defaultamount = 100;
			const newProduct = new Product(prodId,name,bank,defaultamount);
			this.products.push(newProduct);
		}
		else{
			const newProduct = new Product(prodId,name,bank,amount);
			this.products.push(newProduct);
		}
		return prodId;
	}
	
	//returns all products
	getProducts(){
		return [...this.products];
	}
	
	// returns a single product if it matches the id otherwise throws an error
	getSingleProduct(productId: string){
		const product = this.findProduct(productId)[0];
		return {...product};
	}
	// Updates a single account based on id along any of its attributes name, bank or amount 
	updateProduct(productId: string, name: string, bank: string, amount: number){
		const [product, index] = this.findProduct(productId);
		const updatedProduct = {...product};
		if (name) {
			updatedProduct.name = name;
		}
		if (bank) {
			updatedProduct.bank = bank;
		}
		if (amount) {
			updatedProduct.amount = amount;
		}
		this.products[index] = updatedProduct;
		//const product = this.products[productIndex];
	}
	//deletes product via splicing
	deleteProduct(prodId: string){
		const index = this.findProduct(prodId)[1];
		this.products.splice(index,1);
	
	}
	//Transfer money from one account to another
	//transferProduct(productId: string){
	// find product id
	//	const product = this.findProduct(productId)[0];
	//	return {...product};
	//	
	//	
	//	
	//}
	
	//function find product using an array and index
	private findProduct(id: string): [Product, number] {
		const productIndex = this.products.findIndex(prod => prod.id === id);
		const product = this.products[productIndex];
		if(!product){
			throw new NotFoundException('Could not find product.');
		}
		return [product, productIndex];
		
}
}
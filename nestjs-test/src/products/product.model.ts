import { Injectable } from '@nestjs/common';


// made a separate model.ts file to enforce global attributes of id,name,bank and amount
@Injectable()
export class Product{
	
	constructor(
	public id: string, 
	public name: string, 
	public bank: string,
	public amount: number) {}
}
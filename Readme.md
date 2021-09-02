# WALO backend coding assessment
Hi There! 

Since I have no experience in javascript and have not used nodejs or nestjs this coding challenge was challenging to do in 48 hours. Regardless, I have done the coding challenge you can find out below what I have done. I utilized conda and notepad++ for this coding challenge.
I have done testing using [Resty] and [Postman] on localhost:3000/products where products is my api route. To get started please type npm run start:dev to run in production more or npm run start.

For the objectives, I was not able to complete I have the basic idea to do them but due to the time constraint I could not implement the required function. I can explain in more in detail once we talk.
   
You can find the relevant files in nestjs-test/src/products . I hope you are doing well and have a wonderful day!

### Objectives
- Create a new bank account for a customer, with an initial deposit amount. A single customer may have multiple bank accounts. (Done)
- Transfer amounts between any two accounts, including those owned by different customers. (not done)
- Retrieve balances for a given account. (Done)
- Retrieve transfer history for a given account. (not done)
- Write tests for your business logic (Done)




### Function calls(To do on postman):
- To get all the products aka accounts, this returns all the accounts currently in memory (localhost:3000/products). Please refer to get_all_accounts.png
- To insert a new account, this is done during a post call which returns the product id generated randomly using the math library and adds a default if the amount is not passed(localhost:3000/products). Please refer to insert_an_account.png
(and in the body choose raw then json pass), {
    "name":"Branden Gibson",
    "bank": "RBC",
    "amount": 9000}
- To get a specific account this is done by passing the id of the account after route products for example (localhost:3000/products/1). This returns the details of the account along with id. Please refer to get_a_single_account.png
- To delete a specific id, the id needs to be passed after route products (localhost:3000/products/1). This returns a null value and you can see its affect by calling the get for all accounts. Please refer to delete_account.png
- To update any of the account values(name,bank or amount) you can pass these values through patch along with the id number of the account(localhost:3000/products/2). This returns a null value response and you can see its effect by calling the get for all accounts. Please refer to update_for_account.png



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [Resty]: <https://github.com/micha/resty>
   [Postman]: <https://www.postman.com/>
   
   
  

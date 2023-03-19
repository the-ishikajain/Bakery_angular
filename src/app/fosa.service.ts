import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginValidation } from './loginValidation';
import { Food } from './shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FosaService {
  constructor(private httpClient: HttpClient) { }



  loginArr:LoginValidation[]=[
    {userName:"Ishika",  password:"1234"},
    {userName:"Nagarjuna", password:"1234"},
     {userName:"Charan", password:"1234"},
      {userName:"Bheem", password:"12345"},
      {userName:"Apratim", password:"1234"}
  ]

  getAllLoginDetails(){
    return this.loginArr;
  }
  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id==id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAll():Food[]{
    return[
      {
        id: 1,
        name : "White Forest Cake",
        price : 3600,
        favorite : true,
        imageUrl: '/assets/cake1.jpg',
        description :"White Forest Cake is a new twist on the classic European cake. Layers of vanilla sponge cake are filled with sour cherries, white chocolate cream and plenty of Kirschwasser."
        
      },
      {
        id: 2,
        name : "Fruit Cake",
        price : 3200,
        favorite : true,
        imageUrl: '/assets/cake3.webp',
        description :"A fruit cake that contains an assortment of candied fruits, nuts, and spices and is traditionally prepared and served."
      },
      {
        id: 3,
        name : "Strawberry Cake",
        price : 5300,
        favorite : true,
        imageUrl: '/assets/cake4.webp',
        description :"You will fall in love with this fresh Strawberry Cake made with a homemade strawberry reduction. It's moist, tender, and the most beautiful shade of pink!"
      },
      {
        id: 4,
        name : "Vanila Cake",
        price : 4500,
        favorite : true,
        imageUrl: '/assets/cake6.jpg',
        description :"With its outstanding vanilla flavor, pillowy soft crumb, and creamy vanilla buttercream, this is truly the best vanilla cake I’ve ever had. And after 1 bite, I guarantee you’ll agree."
      },
      {
        id: 5,
        name : "Cherry Cake",
        price : 3400,
        favorite : true,
        imageUrl: '/assets/cake3.jpeg',
        description :"This rich butter cake is studded with fresh cherries and kissed with almond extract, which makes it the perfect snack cake for dessert or breakfast!"
      },
      {
        id: 5,
        name : "Chocolate Cake",
        price : 4800,
        favorite : true,
        imageUrl: '/assets/cake7.jpg',
        description :"Chocolate cake is made with melted chocolate.Satisfy your chocolate cravings with the chocolate cake of your dreams."
      },
      
    ]
  }
}

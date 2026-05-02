import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  InfiniteScrollCustomEvent,
  IonAvatar,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList
 } from '@ionic/angular/standalone';

 interface item {
    "id": Number,
    "name": String,
    "price": Number,
    "stock": Number,
    "imageUrl": String}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonAvatar, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList]
})


export class ProductosPage implements OnInit {
  //items: string[] = [];

  items =  [
  {
    "id": 1,
    "name": "Chaiiii",
    "price": 18,
    "stock": 39,
    "imageUrl": "http://localhost:3030/api/products/images/01a5a6d5-6cc4-4e72-8f5d-e44efd3bc3d7.jpg"
  },
  {
    "id": 2,
    "name": "Chang",
    "price": 19,
    "stock": 17,
    "imageUrl": "http://localhost:3030/api/products/images/02ac1e2b-e506-428f-9be3-deca868a1100.jpg"
  },
  {
    "id": 3,
    "name": "Aniseed Syrup",
    "price": 10,
    "stock": 13,
    "imageUrl": "http://localhost:3030/api/products/images/03a3d387-5d66-429f-9b22-f58d388d81a5.jpg"
  },
  {
    "id": 4,
    "name": "Chef Anton's Cajun Seasoning",
    "price": 22,
    "stock": 53,
    "imageUrl": "http://localhost:3030/api/products/images/04a79fa9-f22d-4caf-a5d2-14f975425a8f.jpg"
  },
  {
    "id": 5,
    "name": "Chef Anton's Gumbo Mix",
    "price": 21.35,
    "stock": 0,
    "imageUrl": "http://localhost:3030/api/products/images/05a5a7b5-0652-4e6d-9832-26613126cb68.jpg"
  }
]

  ngOnInit() {
    //this.generateItems();
  }
  /*
  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 5; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }*/

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    //this.generateItems();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
}

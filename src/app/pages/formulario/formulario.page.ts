import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
   IonInput, IonItem, IonList, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
    FormsModule, IonInput, IonItem, IonList, IonButton]
})
export class FormularioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

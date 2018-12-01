import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { ChatService } from './services/chat.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public chats: Observable<any[]>;
  public lugares: Observable<any[]>;
  
  constructor(db: AngularFirestore, public _cs: ChatService) {
    this.chats = db.collection('chats').valueChanges();
    this.lugares = db.collection('lugares').valueChanges();
  }
  

}

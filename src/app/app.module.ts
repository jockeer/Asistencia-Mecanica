import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Rutas
import { APP_ROUTING } from './app.routes';


import { MaterialModule } from './material.module';

//Servicios
import { HeroesServices } from './services/heroes.services';
import { ChatService } from './services/chat.services';
import { LugarService } from './services/lugares.services';

//Componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FheroeComponent } from './components/fheroe/fheroe.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';

//firebase

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';



import { AgmCoreModule } from '@agm/core';

@NgModule({
  entryComponents:[
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    FheroeComponent,
    MapaComponent,
    MapaEditarComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGkLu-h7B4ZcycsxcaCQP9WpixJpVNF-I'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule
    
  ],
  providers: [
    HeroesServices,
    ChatService,
    LugarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

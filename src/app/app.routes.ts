import { RouterModule, Routes  } from "@angular/router";
import  { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from "./components/heroes/heroes.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { FheroeComponent } from "./components/fheroe/fheroe.component";
import { ChatComponent } from "./components/chat/chat.component";
import { LoginComponent } from "./components/login/login.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'about', component: AboutComponent},
    { path: 'heroe/:id', component: HeroeComponent},
    { path: 'FHeroe/:termino', component: FheroeComponent},
    { path: 'chat', component: ChatComponent},
    { path: 'login', component: LoginComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
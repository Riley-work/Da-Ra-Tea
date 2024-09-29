import { Routes } from '@angular/router';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { CafemenuComponent } from './component/cafemenu/cafemenu.component';
import { OurservicesComponent } from './component/ourservices/ourservices.component';
import { ShopComponent } from './component/shop/shop.component';
import { ContatusComponent } from './component/contatus/contatus.component';
import { HomeComponent } from './component/home/home.component';




export const routes: Routes = [{path:'',component:HomeComponent},
    {path:'cafe',component:CafemenuComponent},
    {path:'services',component:OurservicesComponent},
    {path:'shop',component:ShopComponent},
    {path:'about',component:AboutusComponent},
    {path:'contact',component:ContatusComponent}];

  
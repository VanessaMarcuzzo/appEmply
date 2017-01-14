import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { AccueilPage } from '../pages/accueil/accueil';
import { ControlePage } from '../pages/controle/controle';
import { MeshorairesPage } from '../pages/meshoraires/meshoraires';
import { DemandesPage } from '../pages/demandes/demandes';
import { MonprofilPage } from '../pages/monprofil/monprofil';
import { SaisiedemandePage } from '../pages/saisiedemande/saisiedemande';
//ionic push page plus provider push
import {HomePage} from "../pages/home/home";


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AccueilPage,
    ControlePage,
    MeshorairesPage,
    DemandesPage,
    MonprofilPage,
    SaisiedemandePage,
    HomePage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AccueilPage,
    ControlePage,
    MeshorairesPage,
    DemandesPage,
    MonprofilPage,
    SaisiedemandePage,
  ],
  providers: []
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FaucetsComponent } from './faucets/faucets.component';
import { CloudMiningComponent } from './cloud-mining/cloud-mining.component';
import { HyipComponent } from './hyip/hyip.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HoneygainComponent } from './faucets/honeygain/honeygain.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatDialogueComponent } from './mat-dialogue/mat-dialogue/mat-dialogue.component';
import { MatButtonModule, } from '@angular/material/button'; 
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FireFaucetComponent } from './faucets/fire-faucet/fire-faucet.component';
import { AdbtcComponent } from './faucets/adbtc/adbtc.component';
import { TeaserfastComponent } from './faucets/teaserfast/teaserfast.component';
import { SwagbucksComponent } from './faucets/swagbucks/swagbucks.component';
import { CointiplyComponent } from './faucets/cointiply/cointiply.component';
import { BmfComponent } from './faucets/bmf/bmf.component';
import { NftfermaComponent } from './cloud-mining/nftferma/nftferma.component';
import { MinelabComponent } from './cloud-mining/minelab/minelab.component';
import { F2hashComponent } from './cloud-mining/f2hash/f2hash.component';
import { StormgainComponent } from './cloud-mining/stormgain/stormgain.component';
import { BitstarsinvComponent } from './hyip/bitstarsinv/bitstarsinv.component';
import { MerobitComponent } from './hyip/merobit/merobit.component';
import { Tron1477Component } from './hyip/tron1477/tron1477.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FaucetsComponent,
    CloudMiningComponent,
    HyipComponent,
    HoneygainComponent,
    PageNotFoundComponent,
    MatDialogueComponent,
    FireFaucetComponent,
    AdbtcComponent,
    TeaserfastComponent,
    SwagbucksComponent,
    CointiplyComponent,
    BmfComponent,
    NftfermaComponent,
    MinelabComponent,
    F2hashComponent,
    StormgainComponent,
    BitstarsinvComponent,
    MerobitComponent,
    Tron1477Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

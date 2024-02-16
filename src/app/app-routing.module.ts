import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FaucetsComponent } from './faucets/faucets.component';
import { CloudMiningComponent } from './cloud-mining/cloud-mining.component';
import { HyipComponent } from './hyip/hyip.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HoneygainComponent } from './faucets/honeygain/honeygain.component';
import { FireFaucetComponent } from './faucets/fire-faucet/fire-faucet.component';
import { AdbtcComponent } from './faucets/adbtc/adbtc.component';
import { TeaserfastComponent } from './faucets/teaserfast/teaserfast.component';
import { SwagbucksComponent } from './faucets/swagbucks/swagbucks.component';
import { CointiplyComponent } from './faucets/cointiply/cointiply.component';
import { BmfComponent } from './faucets/bmf/bmf.component';
import { NftfermaComponent } from './cloud-mining/nftferma/nftferma.component';
import { F2hashComponent } from './cloud-mining/f2hash/f2hash.component';
import { StormgainComponent } from './cloud-mining/stormgain/stormgain.component';
import { CamelbtcComponent } from './faucets/camelbtc/camelbtc.component';
import { GotComponent } from './cloud-mining/got/got.component';
import { BitsypoolComponent } from './faucets/bitsypool/bitsypool.component';
import { EtccloudComponent } from './hyip/etccloud/etccloud.component';
import { BlackBoxComponent } from './cloud-mining/black-box/black-box.component';
import { NeoflojdComponent } from './hyip/neoflojd/neoflojd.component';
import { XeniminersComponent } from './cloud-mining/xeniminers/xeniminers.component';
import { MakeMoneyComponent } from './faucets/make-money/make-money.component';
import { LosenaComponent } from './faucets/losena/losena.component';
import { MoneySmsComponent } from './faucets/money-sms/money-sms.component';
import { LegitDogeMiningComponent } from './cloud-mining/legit-doge-mining/legit-doge-mining.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'side-hustles',
    component: FaucetsComponent,
    children: [
      {
        path: 'honeygain',
        component: HoneygainComponent,
      },
      {
        path: 'fire-faucet',
        component: FireFaucetComponent,
      },
      {
        path: 'adbtc',
        component: AdbtcComponent,
      },
      {
        path: 'teaserfast',
        component: TeaserfastComponent,
      },
      {
        path: 'swagbucks',
        component: SwagbucksComponent,
      },
      {
        path: 'cointiply',
        component: CointiplyComponent,
      },
      {
        path: 'bmf',
        component: BmfComponent,
      },
      {
        path: 'camelbtc',
        component: CamelbtcComponent,
      },
      {
        path: 'bitsypool',
        component: BitsypoolComponent,
      },
      {
        path: 'make-money',
        component: MakeMoneyComponent,
      },
      {
        path: 'losena',
        component: LosenaComponent,
      },
      {
        path: 'money-sms',
        component: MoneySmsComponent,
      },
    ],
  },
  {
    path: 'cloud-mining',
    component: CloudMiningComponent,
    children: [
      // {
      //   path: 'nftferma', component: NftfermaComponent
      // },
      {
        path: 'f2hash',
        component: F2hashComponent,
      },
      {
        path: 'stormgain',
        component: StormgainComponent,
      },
      {
        path: 'got',
        component: GotComponent,
      },
      // {
      //   path: 'black-box', component: BlackBoxComponent
      // },
      {
        path: 'xeniminers',
        component: XeniminersComponent,
      },
      {
        path: 'legit-doge',
        component: LegitDogeMiningComponent,
      },
    ],
  },
  {
    path: 'investments',
    component: HyipComponent,
    children: [
      {
        path: 'etccloudltd',
        component: EtccloudComponent,
      },
      // {
      //   path: 'neoflojd', component: NeoflojdComponent
      // },
    ],
  },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

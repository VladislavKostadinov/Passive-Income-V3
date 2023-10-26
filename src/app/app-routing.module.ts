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
import { MinelabComponent } from './cloud-mining/minelab/minelab.component';
import { F2hashComponent } from './cloud-mining/f2hash/f2hash.component';
import { StormgainComponent } from './cloud-mining/stormgain/stormgain.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: "home", component: HomePageComponent},
  {path: 'side-hustles', component: FaucetsComponent, children: [
    {
      path: 'honeygain', component: HoneygainComponent
    },
    {
      path: 'fire-faucet', component: FireFaucetComponent
    },
    {
      path: 'adbtc', component: AdbtcComponent
    },
    {
      path: 'teaserfast', component: TeaserfastComponent
    },
    {
      path: 'swagbucks', component: SwagbucksComponent
    },
    {
      path: 'cointiply', component: CointiplyComponent
    },
    {
      path: 'bmf', component: BmfComponent
    },
  ]},
  {path: 'cloud-mining', component: CloudMiningComponent, children: [
    {
      path: 'nftferma', component: NftfermaComponent
    },
    {
      path: 'minelab', component: MinelabComponent
    },
    {
      path: 'f2hash', component: F2hashComponent
    },
    {
      path: 'stormgain', component: StormgainComponent
    },
  ]},
  {path: 'hyip', component: HyipComponent},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

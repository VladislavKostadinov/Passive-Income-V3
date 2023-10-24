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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: "home", component: HomePageComponent},
  {path: 'faucets-and-more', component: FaucetsComponent, children: [
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
  {path: 'cloud-mining', component: CloudMiningComponent},
  {path: 'hyip', component: HyipComponent},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

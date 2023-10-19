import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FaucetsComponent } from './faucets/faucets.component';
import { CloudMiningComponent } from './cloud-mining/cloud-mining.component';
import { HyipComponent } from './hyip/hyip.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HoneygainComponent } from './faucets/honeygain/honeygain.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: "home", component: HomePageComponent},
  {path: 'faucets-and-more', component: FaucetsComponent, children: [
    {
      path: 'honeygain', component: HoneygainComponent
    },
  ]},
  {path: 'cloud-mining', component: CloudMiningComponent},
  {path: 'hyip', component: HyipComponent},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

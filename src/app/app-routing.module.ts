import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
  { path: 'ds', loadChildren: './ds/ds.module#DsPageModule' },
  { path: 'adm', loadChildren: './adm/adm.module#AdmPageModule' },
  { path: 'rh', loadChildren: './rh/rh.module#RhPageModule' },
  { path: 'log', loadChildren: './log/log.module#LogPageModule' },
  { path: 'mark', loadChildren: './mark/mark.module#MarkPageModule' },
  { path: 'vest', loadChildren: './vest/vest.module#VestPageModule' },
  { path: 'sj', loadChildren: './sj/sj.module#SjPageModule' },
  { path: 'cont', loadChildren: './cont/cont.module#ContPageModule' },
  { path: 'etim', loadChildren: './etim/etim.module#EtimPageModule' },
  { path: 'admead', loadChildren: './admead/admead.module#AdmeadPageModule' },
  { path: 'come', loadChildren: './come/come.module#ComePageModule' },
  { path: 'projetos', loadChildren: './projetos/projetos.module#ProjetosPageModule' },
  { path: 'ultimosposts', loadChildren: './ultimosposts/ultimosposts.module#UltimospostsPageModule' },
  { path: 'teste', loadChildren: './teste/teste.module#TestePageModule' },
  { path: 'sala1', loadChildren: './sala1/sala1.module#Sala1PageModule' },
  { path: 'sala2', loadChildren: './sala2/sala2.module#Sala2PageModule' },
  { path: 'sala3', loadChildren: './sala3/sala3.module#Sala3PageModule' },
  { path: 'sala4', loadChildren: './sala4/sala4.module#Sala4PageModule' },
  { path: 'sala5', loadChildren: './sala5/sala5.module#Sala5PageModule' },
  { path: 'sala6', loadChildren: './sala6/sala6.module#Sala6PageModule' },
  { path: 'sala7', loadChildren: './sala7/sala7.module#Sala7PageModule' },
  { path: 'sala8', loadChildren: './sala8/sala8.module#Sala8PageModule' },
  { path: 'sala9', loadChildren: './sala9/sala9.module#Sala9PageModule' },
  { path: 'sala10', loadChildren: './sala10/sala10.module#Sala10PageModule' },
  { path: 'biblioteca', loadChildren: './biblioteca/biblioteca.module#BibliotecaPageModule' },
  { path: 'jogos', loadChildren: './jogos/jogos.module#JogosPageModule' },
  { path: 'patio', loadChildren: './patio/patio.module#PatioPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

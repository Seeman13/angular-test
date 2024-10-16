import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'photos',
    loadChildren: () => import('./modules/photo/photo.module').then(m => m.PhotoModule)
  },
  {
    path: 'photo',
    loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule)
  },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

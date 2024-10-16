import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PhotoLayoutComponent } from '../../components/layouts/photo-layout/photo-layout.component'
import { PhotosComponent } from '../../components/photos/photos.component'
import { ShowPhotoComponent } from '../../components/photos/show-photo/show-photo.component'

const routes: Routes = [
  {
    path: '',
    component: PhotoLayoutComponent,
    children: [
      { path: '', component: PhotosComponent },
      { path: 'photo/:id', component: ShowPhotoComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule {}

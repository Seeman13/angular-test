import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { FormLayoutComponent } from '../../components/layouts/form-layout/form-layout.component'
import { AddPhotoComponent } from '../../components/photos/add-photo/add-photo.component'
import { EditPhotoComponent } from '../../components/photos/edid-photo/edit-photo.component'

const routes: Routes = [
  {
    path: '',
    component: FormLayoutComponent,
    children: [
      { path: 'add', component: AddPhotoComponent },
      { path: 'edit/:id', component: EditPhotoComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {}

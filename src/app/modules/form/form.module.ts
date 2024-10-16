import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { FormRoutingModule } from './form-routing.module'
import { MaterialModule } from '../material/material.module'
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module'

import { AddPhotoComponent } from '../../components/photos/add-photo/add-photo.component'
import { EditPhotoComponent } from '../../components/photos/edid-photo/edit-photo.component'
import { FormLayoutComponent } from '../../components/layouts/form-layout/form-layout.component'


@NgModule({
  declarations: [
    FormLayoutComponent,
    AddPhotoComponent,
    EditPhotoComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    MaterialModule,
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormModule {}

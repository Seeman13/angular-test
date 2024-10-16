import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PhotoRoutingModule } from './photo-routing.module'
import { MaterialModule } from '../material/material.module'
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module'

import { PhotoLayoutComponent } from '../../components/layouts/photo-layout/photo-layout.component'
import { PhotosComponent } from '../../components/photos/photos.component'
import { ShowPhotoComponent } from '../../components/photos/show-photo/show-photo.component'
import { PaginatorComponent } from '../../common/components/paginator/paginator.component'


@NgModule({
  declarations: [
    PhotoLayoutComponent,
    PhotosComponent,
    ShowPhotoComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    MaterialModule,
    BreadcrumbModule
  ]
})
export class PhotoModule {}

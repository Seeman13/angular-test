import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { MaterialModule } from '../material/material.module'
import { BreadcrumbComponent } from '../../common/components/breadcrumb/breadcrumb.component'


@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule {}

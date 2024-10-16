import { Component, Input } from '@angular/core'
import { IBreadcrumb } from '../../interfaces'

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {
  @Input('items') items: IBreadcrumb[] = []
}

import { Component, Input, Output, EventEmitter } from '@angular/core'
import { PageEvent } from '@angular/material/paginator'

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input('length') length: number = 5000
  @Input('pageSizeOptions') pageSizeOptions: Array<number> = [100, 200, 500, 1000]
  @Input('hidePageSize') hidePageSize: boolean = true

  @Output() onGoPage = new EventEmitter<number>()

  handlePageEvent ($event: PageEvent) {
    this.onGoPage.emit($event.pageIndex)
  }
}

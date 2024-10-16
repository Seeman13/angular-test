import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

import { IBreadcrumb, IPhoto } from '../../common/interfaces'
import { PhotoService } from '../../services/photo.service'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  breadcrumbs: IBreadcrumb[] = [
    { url: null, title: 'Каталог фотографий' }
  ]

  aSub: Subscription
  public photos: IPhoto[]

  public maxRecord: number = 5000
  public skip: number = 0
  private until: number = 20
  public limit: number = 20

  constructor (private route: ActivatedRoute, private photoService: PhotoService) {}

  ngOnInit (): void {
    this.fetch()
  }

  ngOnDestroy (): void {
    if (this.aSub) this.aSub.unsubscribe()
  }

  private fetch () {
    this.aSub = this.photoService.getPhotos(this.skip, this.until)
      .subscribe((photos: IPhoto[]) => this.photos = photos)
  }

  public goPage(page: number): void {
    this.skip = page * this.limit
    this.until = this.limit * (page + 1)
    this.fetch()
  }
}

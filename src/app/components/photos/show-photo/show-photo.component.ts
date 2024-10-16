import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

import { IBreadcrumb, IPhoto } from '../../../common/interfaces'
import { PhotoService } from '../../../services/photo.service'

@Component({
  selector: 'app-show-photo',
  templateUrl: './show-photo.component.html'
})
export class ShowPhotoComponent implements OnInit, OnDestroy {
  breadcrumbs: IBreadcrumb[]

  aSub: Subscription
  public photo: IPhoto

  constructor (private route: ActivatedRoute, private photoService: PhotoService) {}

  ngOnInit (): void {
    const id: string = this.route.snapshot.paramMap.get('id')
    this.aSub = this.photoService.getPhoto(id).subscribe((photo: IPhoto) => {
      this.photo = photo
      this.breadcrumbs = [
        { url: '/photos', title: 'Каталог фотографий' },
        { url: '', title: photo.title }
      ]
    })
  }

  ngOnDestroy (): void {
    if (this.aSub) this.aSub.unsubscribe()
  }
}

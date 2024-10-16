import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

import { IBreadcrumb, IPhoto } from '../../../common/interfaces'
import { PhotoService } from '../../../services/photo.service'

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html'
})
export class EditPhotoComponent implements OnInit {
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
        { url: `/photos/photo/${photo.id}`, title: photo.title },
        { url: '', title: 'Редактирование' },
      ]
    })
  }

  ngOnDestroy (): void {
    if (this.aSub) this.aSub.unsubscribe()
  }
}

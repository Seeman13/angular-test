import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'

import { fieldRequire } from '../../../common/validators'
import { IBreadcrumb } from '../../../common/interfaces'

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss']
})
export class AddPhotoComponent implements OnInit {
  breadcrumbs: IBreadcrumb[] = [
    { url: '/photos', title: 'Каталог фотографий' },
    { url: null, title: 'Добавить новое фото' }
  ]

  public form: FormGroup
  loading: boolean = false

  get f () {
    return this.form.controls
  }

  constructor (private _snackBar: MatSnackBar) {}

  ngOnInit (): void {
    this.form = new FormGroup({
      albumId: new FormControl(null,[Validators.required, Validators.pattern(/^\d+$/)]),
      title: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      link: new FormGroup({
        url: new FormControl(null),
        thumbnailUrl: new FormControl(null)
      }, fieldRequire())
    })
  }

  onSubmit (formDirective: FormGroupDirective) {
    this.form.disable()
    this.loading = true
    setTimeout(() => {
      console.log(this.form.value)
      formDirective.resetForm()
      this.form.reset()
      this.loading = false
      this.form.enable()
      this.openSnackBar('Успешно!', 'ОК')
    }, 3000)
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action)
  }
}

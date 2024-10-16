import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public links = [
    { url: '/photo/add', name: 'добавить новое фото' },
    { url: '/photos', name: 'просмотр каталога с фото' },
    { url: '/photos/photo/10', name: 'открыть случайное фото' }
  ]
}

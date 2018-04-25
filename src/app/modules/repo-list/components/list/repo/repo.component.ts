import { Component, Input } from '@angular/core'
import { IRepo } from '@app/shared/models/IRepo'


@Component({
  selector: 'repo-item',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})

export class RepoItemComponent {
    @Input() repo: IRepo
}
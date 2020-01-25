import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Runtimeloader from 'src/utils/RuntimeLoader';
import ExternalRuntimes from 'src/utils/ExternalRuntimes';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: string

  constructor(router: ActivatedRoute) {
    router.paramMap.subscribe(params => {
      this.id = params.get('id')
    })
  }

  ngOnInit() {
    Runtimeloader.loadRuntime(ExternalRuntimes.TEAM_PRODUCT)
    Runtimeloader.loadRuntime(ExternalRuntimes.TEAM_DISCOVER)
  }
}

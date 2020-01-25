import { Component, OnInit } from '@angular/core';
import Runtimeloader from 'src/utils/RuntimeLoader';
import ExternalRuntimes from 'src/utils/ExternalRuntimes';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.scss']
})
export class WomanComponent implements OnInit {

  ngOnInit() {
    Runtimeloader.loadRuntime(ExternalRuntimes.TEAM_LIST)
  }
}

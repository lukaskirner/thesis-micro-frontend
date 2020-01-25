import { Component, OnInit } from '@angular/core';
import Runtimeloader from 'src/utils/RuntimeLoader';
import ExternalRuntimes from 'src/utils/ExternalRuntimes';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {

  ngOnInit() {
    Runtimeloader.loadRuntime(ExternalRuntimes.TEAM_LIST)
  }
}

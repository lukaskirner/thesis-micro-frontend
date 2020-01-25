import { Component, OnInit } from '@angular/core';
import Runtimeloader from 'src/utils/RuntimeLoader';
import ExternalRuntimes from 'src/utils/ExternalRuntimes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    Runtimeloader.loadRuntime(ExternalRuntimes.TEAM_HEADER)
    Runtimeloader.loadRuntime(ExternalRuntimes.TEAM_BASKET)
  }
}

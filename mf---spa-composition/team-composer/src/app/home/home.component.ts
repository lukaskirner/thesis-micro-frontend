import { Component, OnInit } from '@angular/core';
import Runtimeloader from 'src/utils/RuntimeLoader';
import ExternalRuntimes from 'src/utils/ExternalRuntimes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    Runtimeloader.loadRuntime(ExternalRuntimes.TEAM_LIST)
  }
}

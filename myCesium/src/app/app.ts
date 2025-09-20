import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CesiumViewer} from './cesium-viewer/cesium-viewer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CesiumViewer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myCesium');
}

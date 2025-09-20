import { Component, OnInit ,OnDestroy } from '@angular/core';
import * as Cesium from 'cesium';
import { DataService } from '../services/data.service'; 
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-cesium-viewer',
  imports: [],
  templateUrl: './cesium-viewer.html',
  styleUrl: './cesium-viewer.css'
})
export class CesiumViewer implements OnInit, OnDestroy{

  private test: Subscription = new Subscription();
 
  constructor(private dataService:DataService){}

  ngOnInit(): void {

        const viewer = new Cesium.Viewer(
                "cesiumContainer",
                {
                  terrain: Cesium.Terrain.fromWorldTerrain(),
                  targetFrameRate: 240.0,
                  useBrowserRecommendedResolution : false
                }
        );
        viewer.cesiumWidget.creditContainer.parentNode?.removeChild(viewer.cesiumWidget.creditContainer); 


          viewer.camera.flyTo(
                {
                  destination: Cesium.Cartesian3.fromDegrees(-70,40,80000000), // Longitude, Latitude, Height in meters
                }
        );


        this.fetch(viewer);
  }

  fetch(viewer:Cesium.Viewer): void {
    this.test = this.dataService.getData().subscribe((czmlData)=>{
      let str_array = czmlData.data.trim();
      const dataSourcePromise = Cesium.CzmlDataSource.load(JSON.parse(str_array));
      viewer.dataSources.add(dataSourcePromise);
    });         
  }

  ngOnDestroy(): void {
    this.test.unsubscribe();
  }

}

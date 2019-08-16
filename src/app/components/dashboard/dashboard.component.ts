import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

export let mobile: boolean;
export let desktop: boolean;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService) {
    this.detectDevice();
  }

  public deviceInfo = null;
  public isMobilevar = false;
  public isDesktopvar = false;
  public data1 = '';
  public data2 = '';
  public data3 = '';
  public text1 = '';
  public text2 = '';
  public text3 = '';


  ngOnInit() {
    this.isMobile();
    this.isDesktop();
    this.changeText();
  }

  public detectDevice() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }

  public isMobile() {
    this.isMobilevar = this.deviceService.isMobile();
    mobile = this.isMobilevar;
    if (mobile) {
      this.data1 = '/gestion-trabajadores';
      this.data2 = '/gestion-compras';
      this.data3 = '/asignacion-horas-laboradas';
      document.getElementById('btn1').nodeValue = 'hola';
    }
  }

  public isDesktop() {
    this.isDesktopvar = this.deviceService.isDesktop();
    desktop = this.isDesktopvar;
    if (desktop) {
      this.data1 = '/administration';
      this.data2 = '/reportes';
      this.data3 = '/punto-venta';
    }
  }

  public changeText(): void {
    if (mobile) {
      this.text1 = 'Gestión de Trabajadores';
      this.text2 = 'Gestión de Compras';
      this.text3 = 'Asignacion de horas laboradas';
    } else {
      this.text1 = 'Administración';
      this.text2 = 'Reportes';
      this.text3 = 'Puntos de Venta';
    }
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { GestionRolesComponent } from './components/gestion-roles/gestion-roles.component';
import { GestionComprasComponent } from './components/gestion-compras/gestion-compras.component';
import { GestionProductosComponent } from './components/gestion-productos/gestion-productos.component';
import { GestionProveedoresComponent } from './components/gestion-proveedores/gestion-proveedores.component';
import { GestionSucursalesComponent } from './components/gestion-sucursales/gestion-sucursales.component';
import { GestionTrabajadoresComponent } from './components/gestion-trabajadores/gestion-trabajadores.component';
import { AsigancionHorasLaboradasComponent } from './components/asigancion-horas-laboradas/asigancion-horas-laboradas.component';
import { GeneracionPlanillaComponent } from './components/generacion-planilla/generacion-planilla.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ListadoGastosComponent } from './components/listado-gastos/listado-gastos.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { ListadoProductosSucursalComponent } from './components/listado-productos-sucursal/listado-productos-sucursal.component';
import { PuntoVentaComponent } from './components/punto-venta/punto-venta.component';
import { LoginComponent } from './components/login/login.component';
import { SucursalAComponent } from './components/sucursal-a/sucursal-a.component';
import { SucursalBComponent } from './components/sucursal-b/sucursal-b.component';
import { SucursalCComponent } from './components/sucursal-c/sucursal-c.component';
import { GastosSucursalAComponent } from './components/gastos-sucursal-a/gastos-sucursal-a.component';
import { GastosSucursalBComponent } from './components/gastos-sucursal-b/gastos-sucursal-b.component';
import { GastosSucursalCComponent } from './components/gastos-sucursal-c/gastos-sucursal-c.component';
import { GastosGeneralesComponent } from './components/gastos-generales/gastos-generales.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdministrationComponent,
    GestionRolesComponent,
    GestionComprasComponent,
    GestionProductosComponent,
    GestionProveedoresComponent,
    GestionSucursalesComponent,
    GestionTrabajadoresComponent,
    AsigancionHorasLaboradasComponent,
    GeneracionPlanillaComponent,
    ReportesComponent,
    ListadoGastosComponent,
    ListadoProductosComponent,
    ListadoProductosSucursalComponent,
    PuntoVentaComponent,
    LoginComponent,
    SucursalAComponent,
    SucursalBComponent,
    SucursalCComponent,
    GastosSucursalAComponent,
    GastosSucursalBComponent,
    GastosSucursalCComponent,
    GastosGeneralesComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

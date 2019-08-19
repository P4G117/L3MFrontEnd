import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DeviceDetectorModule} from 'ngx-device-detector';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

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
import { AnadirRolComponent } from './components/anadir-rol/anadir-rol.component';
import { EditarRolComponent } from './components/editar-rol/editar-rol.component';
import { AnadirSucursalComponent } from './components/anadir-sucursal/anadir-sucursal.component';
import { AnadirTrabajadoresComponent } from './components/anadir-trabajadores/anadir-trabajadores.component';
import { AnadirProveedorComponent } from './components/anadir-proveedor/anadir-proveedor.component';
import { AnadirProductosComponent } from './components/anadir-productos/anadir-productos.component';
import { AnadirComprasComponent } from './components/anadir-compras/anadir-compras.component';
import { EditarSucursalComponent } from './components/editar-sucursal/editar-sucursal.component';
import { EditarTrabajadoresComponent } from './components/editar-trabajadores/editar-trabajadores.component';
import { EditarProveedoresComponent } from './components/editar-proveedores/editar-proveedores.component';
import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { EditarComprasComponent } from './components/editar-compras/editar-compras.component';
import { AsignacionHorasComponent } from './components/asignacion-horas/asignacion-horas.component';



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
    AnadirRolComponent,
    EditarRolComponent,
    AnadirSucursalComponent,
    AnadirTrabajadoresComponent,
    AnadirProveedorComponent,
    AnadirProductosComponent,
    AnadirComprasComponent,
    EditarSucursalComponent,
    EditarTrabajadoresComponent,
    EditarProveedoresComponent,
    EditarProductosComponent,
    EditarComprasComponent,
    AsignacionHorasComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AsigancionHorasLaboradasComponent } from './components/asigancion-horas-laboradas/asigancion-horas-laboradas.component';
import { GeneracionPlanillaComponent } from './components/generacion-planilla/generacion-planilla.component';
import { GestionComprasComponent } from './components/gestion-compras/gestion-compras.component';
import { GestionProductosComponent } from './components/gestion-productos/gestion-productos.component';
import { GestionProveedoresComponent } from './components/gestion-proveedores/gestion-proveedores.component';
import { GestionRolesComponent } from './components/gestion-roles/gestion-roles.component';
import { GestionSucursalesComponent } from './components/gestion-sucursales/gestion-sucursales.component';
import { GestionTrabajadoresComponent } from './components/gestion-trabajadores/gestion-trabajadores.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ListadoGastosComponent } from './components/listado-gastos/listado-gastos.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { ListadoProductosSucursalComponent } from './components/listado-productos-sucursal/listado-productos-sucursal.component';
import { PuntoVentaComponent } from './components/punto-venta/punto-venta.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'administration',
    component: AdministrationComponent,
  },
  {
    path: 'asigancion-horas-laboradas',
    component: AsigancionHorasLaboradasComponent,
  },
  {
    path: 'generacion-planilla',
    component: GeneracionPlanillaComponent,
  },
  {
    path: 'gestion-compras',
    component: GestionComprasComponent,
  },
  {
    path: 'gestion-productos',
    component: GestionProductosComponent,
  },
  {
    path: 'gestion-proveedores',
    component: GestionProveedoresComponent,
  },
  {
    path: 'gestion-roles',
    component: GestionRolesComponent,
  },
  {
    path: 'gestion-sucursales',
    component: GestionSucursalesComponent,
  },
  {
    path: 'gestion-trabajadores',
    component: GestionTrabajadoresComponent,
  },
  {
    path: 'reportes',
    component: ReportesComponent,
  },
  {
    path: 'listado-gastos',
    component: ListadoGastosComponent,
  },
  {
    path: 'listado-prodcutos',
    component: ListadoProductosComponent,
  },
  {
    path: 'listado-productos-sucursal',
    component: ListadoProductosSucursalComponent,
  },
  {
    path: 'punto-venta',
    component: PuntoVentaComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

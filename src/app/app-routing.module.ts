import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { SucursalAComponent } from './components/sucursal-a/sucursal-a.component';
import { SucursalBComponent } from './components/sucursal-b/sucursal-b.component';
import { SucursalCComponent } from './components/sucursal-c/sucursal-c.component';
import { GastosGeneralesComponent } from './components/gastos-generales/gastos-generales.component';
import { GastosSucursalAComponent } from './components/gastos-sucursal-a/gastos-sucursal-a.component';
import { GastosSucursalBComponent } from './components/gastos-sucursal-b/gastos-sucursal-b.component';
import { GastosSucursalCComponent } from './components/gastos-sucursal-c/gastos-sucursal-c.component';
import { AnadirRolComponent } from './components/anadir-rol/anadir-rol.component';
import { EditarRolComponent } from './components/editar-rol/editar-rol.component';
import { EditarSucursalComponent } from './components/editar-sucursal/editar-sucursal.component';
import { EditarTrabajadoresComponent } from './components/editar-trabajadores/editar-trabajadores.component';
import { EditarProveedoresComponent } from './components/editar-proveedores/editar-proveedores.component';
import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { EditarComprasComponent } from './components/editar-compras/editar-compras.component';
import { AnadirSucursalComponent } from './components/anadir-sucursal/anadir-sucursal.component';
import { AnadirTrabajadoresComponent } from './components/anadir-trabajadores/anadir-trabajadores.component';
import { AnadirProveedorComponent } from './components/anadir-proveedor/anadir-proveedor.component';
import { AnadirProductosComponent } from './components/anadir-productos/anadir-productos.component';
import { AnadirComprasComponent } from './components/anadir-compras/anadir-compras.component';
import { AsignacionHorasComponent } from './components/asignacion-horas/asignacion-horas.component';


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
    path: 'asignacion-horas-laboradas',
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
    path: 'listado-productos',
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
  {
    path: 'sucursal-a',
    component: SucursalAComponent,
  },
  {
    path: 'sucursal-b',
    component: SucursalBComponent,
  },
  {
    path: 'sucursal-c',
    component: SucursalCComponent,
  },
  {
    path: 'gastos-generales',
    component: GastosGeneralesComponent,
  },
  {
    path: 'gastos-sucursal-a',
    component: GastosSucursalAComponent,
  },
  {
    path: 'gastos-sucursal-b',
    component: GastosSucursalBComponent,
  },
  {
    path: 'gastos-sucursal-c',
    component: GastosSucursalCComponent,
  },
  {
    path: 'anadir-rol',
    component: AnadirRolComponent,
  },
  {
    path: 'anadir-sucursal',
    component: AnadirSucursalComponent,
  },
  {
    path: 'anadir-trabajadores',
    component: AnadirTrabajadoresComponent,
  },
  {
    path: 'anadir-proveedor',
    component: AnadirProveedorComponent,
  },
  {
    path: 'anadir-productos',
    component: AnadirProductosComponent,
  },
  {
    path: 'anadir-compras',
    component: AnadirComprasComponent,
  },
  {
    path: 'editar-rol',
    component: EditarRolComponent,
  },
  {
    path: 'editar-sucursal',
    component: EditarSucursalComponent,
  },
  {
    path: 'editar-trabajadores',
    component: EditarTrabajadoresComponent,
  },
  {
    path: 'editar-proveedores',
    component: EditarProveedoresComponent,
  },
  {
    path: 'editar-productos',
    component: EditarProductosComponent,
  },
  {
    path: 'editar-compras',
    component: EditarComprasComponent,
  },
  {
    path: 'asignacion-horas',
    component: AsignacionHorasComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

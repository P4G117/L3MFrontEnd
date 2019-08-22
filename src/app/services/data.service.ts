import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rol, Proveedor, Producto, Trabajador, Sucursal, Inventario, Compras, HorasTrabajadas} from '../user.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  users: Array<any> = [] 

  apiUrl = "http://192.168.100.21:8080/api";

  private loggedInStatus = false
  post: any;

  constructor(private _http: HttpClient) { }

//Funciones Get
getRol(){
  return this._http.get<Rol[]>(this.apiUrl + '/Roles');
}

getProducto(){
  return this._http.get<Producto[]>(this.apiUrl + '/Products');
}

getTrabajador(){
  return this._http.get<Trabajador[]>(this.apiUrl + '/Workers');
}

getSucursal(){
  return this._http.get<Sucursal[]>(this.apiUrl + '/BranchOffices');
}
getProveedor(){
  return this._http.get<Proveedor[]>(this.apiUrl + '/Suppliers');
}

getInventario(){
  return this._http.get<Inventario[]>(this.apiUrl + '/BranchInventories');
}

getCompras(){
  return this._http.get<Compras[]>(this.apiUrl + '/Purchases');
}

getHTrabajadas(){
  return this._http.get<HorasTrabajadas[]>(this.apiUrl + '/HourRecords');
}

//Funciones Post
createTraveller(traveller: Rol){
  return this._http.post(this.apiUrl + '/Roles/?name=', traveller);
}


postRol(data){
  return this._http.post<Rol>(this.apiUrl + '/Roles/?name=', JSON.stringify(data))
}

registerUsers(obj){
  return this._http.post(this.apiUrl,obj, {
    headers: new HttpHeaders({
         'Content-Type':  'application/json',
       })
  }).map(data=>
   data);
}

/*/Funcion para hacer el Post
post(url, data) {
  return this._http.post(url, data, {     
  });
}
//Funcion para hacer Put
put(url, data) {
  return this._http.put(url, data, {
  });
}*/


setLoggedIn(value: boolean) {
  this.loggedInStatus = value
}

get isLoggedIn() {
  return this.loggedInStatus
}

/*#############################################################
//Metodos para la Categoria de Trabajadores
//Post Worker
  CreateWorker(data){
    return this._http.post(this.apiUrl + '/Workers/', data)
  }  
  // Get Worker
  GetWorker(id){
    return this._http.get(this.apiUrl + '/Workers/' + id)
  }
  // Get Workers
  GetWorkers(){
    return this._http.get(this.apiUrl + '/Workers/')
  }
  // Put Worker
  UpdateWorker(id, data){
    return this._http.put(this.apiUrl + '/Workers/' + id, data)
  }
  // Delete Worker
  DeleteWorker(id){
    return this._http.delete(this.apiUrl + '/Workers/' + id)
  }*/

/*#############################################################
//Metodos para la Categoria de Productos
//Post Products
  CreateProducts(data){
    return this._http.post(this.apiUrl + '/Products/', data)
  }  
  // Get Product
  GetProduct(id){
    return this._http.get(this.apiUrl + '/Products/' + id)
  }
  // Get Products
  GetProducts(){
    return this._http.get(this.apiUrl + '/Products/')
  }
  // Put Products
  UpdateProduct(id, data){
    return this._http.put(this.apiUrl + '/Products/' + id, data)
  }
  // Delete Product
  DeleteProduct(id){
    return this._http.delete(this.apiUrl + '/Products/' + id)
  }*/

/*#############################################################
//Metodos para la Categoria de Proveedores
//Post Suppliers
  CreateSuppliers(data){
    return this._http.post(this.apiUrl + '/Suppliers/', data)
  }  
  // Get Suppliers
  GetSupplier(id){
    return this._http.get(this.apiUrl + '/Suppliers/' + id)
  }
  // Get Suppliers
  GetSuppliers(){
    return this._http.get(this.apiUrl + '/Suppliers/')
  }
  // Put Suppliers
  UpdateSupplier(id, data){
    return this._http.put(this.apiUrl + '/Suppliers/' + id, data)
  }
  // Delete Suppliers
  DeleteSuppliers(id){
    return this._http.delete(this.apiUrl + '/Suppliers/' + id)
  }*/

//#############################################################
//Metodos para la Categoria de Roles
//Post Rol
  CreateRol(data){
    return this._http.post(this.apiUrl + '/Roles/', data)
  }  
  // Get Rol
  GetRol(id){
    return this._http.get(this.apiUrl + '/Roles/' + id)
  }
  // Get Rols
  GetRols(){
    return this._http.get(this.apiUrl + '/Roles/')
  }
  // Put Rol
  UpdateRol(id, data){
    return this._http.put(this.apiUrl + '/Roles/' + id, data)
  }
  // Delete Rols
  DeleteRol(id){
    return this._http.delete(this.apiUrl + '/Roles/' + id)
  }

/*#############################################################
//Metodos para la Categoria de Sucursales
//Post BranchOffice
  CreateBranchOffice(data){
    return this._http.post(this.apiUrl + '/BranchOffices/', data)
  }  
  // Get BranchOffice
  GetBranchOffice(id){
    return this._http.get(this.apiUrl + '/BranchOffices/' + id)
  }
  // Get BranchOffice
  GetBranchOffices(){
    return this._http.get(this.apiUrl + '/BranchOffices/')
  }
  // Put BranchOffice
  UpdateBranchOffice(id, data){
    return this._http.put(this.apiUrl + '/BranchOffices/' + id, data)
  }
  // Delete BranchOffice
  DeleteBranchOffice(id){
    return this._http.delete(this.apiUrl + '/BranchOffice/' + id)
  }*/

/*#############################################################
//Metodos para la Categoria de Compras
//Post Purchase
  CreatePurchase(data){
    return this._http.post(this.apiUrl + '/Purchases/', data)
  }  
  // Get Purchase
  GetPurchase(id){
    return this._http.get(this.apiUrl + '/Purchases/' + id)
  }
  // Get Purchase
  GetPurchases(){
    return this._http.get(this.apiUrl + '/Purchases/')
  }
  // Put Purchase
  UpdatePurchase(id, data){
    return this._http.put(this.apiUrl + '/Purchases/' + id, data)
  }
  // Delete Purchase
  DeletePurchase(id){
    return this._http.delete(this.apiUrl + '/Purchases/' + id)
  }*/

/*#############################################################
//Metodos para la Categoria de Inventario
//Post BranchInventory
  CreateBranchInventory(data){
    return this._http.post(this.apiUrl + '/BranchInventory/', data)
  }  
  // Get BranchInventory
  GetBranchInventory(id){
    return this._http.get(this.apiUrl + '/BranchInventory/' + id)
  }
  // Get BranchInventory
  GetBranchInventory(){
    return this._http.get(this.apiUrl + '/BranchInventory/')
  }
  // Put BranchInventory
  UpdateBranchInventory(id, data){
    return this._http.put(this.apiUrl + '/BranchInventory/' + id, data)
  }
  // Delete BranchInventory
  DeleteBranchInventory(id){
    return this._http.delete(this.apiUrl + '/BranchInventory/' + id)
  }*/

/*#############################################################
//Metodos para la Categoria de Asignacion Horas
//Post HourRecord
  CreateHourRecord(data){
    return this._http.post(this.apiUrl + '/HourRecord/', data)
  }  
  // Get HourRecord
  GetHourRecord(id){
    return this._http.get(this.apiUrl + '/HourRecord/' + id)
  }
  // Get HourRecord
  GetHourRecord(){
    return this._http.get(this.apiUrl + '/HourRecord/')
  }
  // Put HourRecord
  UpdateHourRecord(id, data){
    return this._http.put(this.apiUrl + '/HourRecord/' + id, data)
  }
  // Delete HourRecord
  DeleteHourRecord(id){
    return this._http.delete(this.apiUrl + '/HourRecord/' + id)
  }*/

}


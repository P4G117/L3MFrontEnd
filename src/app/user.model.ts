

//Productos
export class Inventario{
    Barcode: string;
    Name: number;
    Description: number;
    BranchPrice: string;
    Stock: string;
    BranchOffice: string;
     
}

//Producto
export class Producto{
    Barcode: string;
    Name: string;
    Description: string;
    Price: number;
    Supplier: string;
    Tax: number;
    Discount: number;

} 

//Roles
export class Rol{
    Name: string;
    Description: string;
}

//Sucursal
export class Sucursal{
    Name: string;
    Address: string;
    Phone: string;
    Administrator: string;
}
//Compras
export class Compras{
    ID: string;
    Description: string;
    RealDate: string;
    RegistrationDate: string;
    Supplier: string;
    Image: string;
    BranchOffice: string;
}
//Proveedores
export class Proveedor{
    IndentificationCard: string;
    Name: string;
}

//Trabajadores
export class Trabajador{
    IndentificationCard: string;
    Name: string;
    BirthDate: string;
    AdmissionDate: string;
    BranchOffice: string;
    HourlyWage: number;
    Rol: string;
}

//Horas Trabajadas
export class HorasTrabajadas{
    Name: string;
    WeekBeginning: string;
    WeekEnd: string;
    WorkedHours: string;
}
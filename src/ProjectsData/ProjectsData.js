import { Proyecto } from "./cProyecto"


//FOTOS DE APLICATE RECICLANDO
import AppRec1 from '../Assets/ApplicateRec/001.png'
import AppRec2 from '../Assets/ApplicateRec/002.png'
import AppRec3 from '../Assets/ApplicateRec/003.png'
import AppRec4 from '../Assets/ApplicateRec/004.png'
import AppRec5 from '../Assets/ApplicateRec/005.png'


//FOTOS DE UT-SHOP
import UTShop1 from '../Assets/UT-Shop/001.png'
import UTShop2 from '../Assets/UT-Shop/002.png'

//FOTOS DE SIC PAGOS
import SicPagos1 from '../Assets/SIC-Pagos/001.png'
import SicPagos2 from '../Assets/SIC-Pagos/002.png'
import SicPagos3 from '../Assets/SIC-Pagos/003.png'

// NombreProyecto, Fecha, Descripcion, Fotos

export const ListadoSoftware = [
    new Proyecto('Applicate Reciclando', 2022, 'Una aplicacion movil la cual ayudaba al control de un programa recoleccion de PET', [AppRec1, AppRec2, AppRec3, AppRec4, AppRec5]),
    new Proyecto('UT-Shop', 2021, 'Un punto de venta en la web programado con ASP.NET Utilizando la estructura MVC',[UTShop1, UTShop2]),
    new Proyecto('Control de pagos', 2023, 'Un servicio de pago de servicios en linea programado con ASP.NET Utilizando la estructura MVC',[SicPagos1, SicPagos2, SicPagos3])
]
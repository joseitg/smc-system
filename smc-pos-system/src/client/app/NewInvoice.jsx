import React from 'react';
/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Contenido de Nueva Facturacion
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
under construction
``````````````````
*/
class NewInvoice extends React.Component {

    render() {
        return (
            <div className="invoice">
                <p>wow</p>
                <form>
                    Numero de Orden<input type="number" name="numOrden" id="" /><br />
                    Nombre<input type="text" name="nombreCliente" id="" />
                    Apellidos <input type="text" name="apellidos" id="" /><br />
                    Fecha<input type="date" name="fecha" id="" /><br />
                    Empleado<input type="text" name="empleado" id="" /><br />
                    Total Factura<input type="number" name="totalFactura" id="" /><br />
                    Pronto<input type="number" name="pronto" id="" /><br />
                    Financiera<select name="financiera" id="">
                        <option value="muebleria">Muebleria</option>
                        <option value="coop">Cooperativa</option>
                    </select><br />
                    Tipo de Venta<input type="text" name="tipodeVenta" id="" /><br />
                </form>

            </div>
        );
    }
}

export default NewInvoice;
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
                <p>wubba lubba dub dub!!</p>
                <form>
                    <label HTMLFor="numOrden">Numero de Orden</label><input type="number" name="numOrden" id="" /><br />
                    <label HTMLFor="nombre"> Nombre</label><input type="text" name="nombreCliente" id="" />
                    <label HTMLFor="apellidos">Apellidos</label><input type="text" name="apellidos" id="" /><br />
                    <label HTMLFor="fecha">Fecha</label> <input type="date" name="fecha" id="" /><br />
                    <label HTMLFor="empleado">Empleado</label> <input type="text" name="empleado" id="" /><br />
                    <label HTMLFor="totalFac">Total Factura</label> <input type="number" name="totalFactura" id="" /><br />
                    <label HTMLFor="pronto">Pronto</label> <input type="number" name="pronto" id="" /><br />
                    <label HTMLFor="financiera">Financiera</label> <select name="financiera" id="">
                        <option value="muebleria">Muebleria</option>
                        <option value="coop">Cooperativa</option>
                    </select><br />
                    <label HTMLFor="tipodeventa">Tipo de Venta</label> <input type="text" name="tipodeVenta" id="" /><br />
                </form>

            </div>
        );
    }
}

export default NewInvoice;
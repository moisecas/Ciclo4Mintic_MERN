package tienda.modelos ;

import java.util.Date;

public class venta {
    Date fecha;
    String cliente; 
    String producto;
    Double precio;
    int cantidad;
    String vendedor;

    //constructor
    public venta(Date fecha, String cliente, String producto, Double precio, int cantidad, String vendedor) {
        this.fecha = fecha;
        this.cliente = cliente;
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.vendedor = vendedor;
    }

    //getters y setters
    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public String getProducto() {
        return producto;
    }

    public void setProducto(String producto) {
        this.producto = producto;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public String getVendedor() {
        return vendedor;
    }

    public void setVendedor(String vendedor) {
        this.vendedor = vendedor;
    }

    @Override //sobreescribir el metodo toString PARA QUE IMPRIMA LOS ATRIBUTOS DE LA CLASE
    public String toString() {
        return "venta{" + "fecha=" + fecha + ", cliente=" + cliente + ", producto=" + producto + ", precio=" + precio + ", cantidad=" + cantidad + ", vendedor=" + vendedor + '}';
    }

}

package tienda.vista;

public class vista {
    //menu principal
    public void menuPrincipal(){
        System.out.println("Tienda de animales, bienvenido");
        System.out.println("Seleccione una opción");
        System.out.println("1. Ingresar Venta");
        System.out.println("2. Buscar Venta");
        System.out.println("3. Modificar venta");
        System.out.println("4. Eliminar venta");
        System.out.println("5. Ver lista de venta");
        System.out.println("6. Salir");
    }
    public static void verVentas(){
        System.out.println("Lista de ventas");
        for(int i=0; i<controlador.ventas.size(); i++){ //recorre el arraylist ventas mientras i sea menor al tamaño del arraylist

            System.out.println(controlador.ventas.get(i).getNumVebta());
            System.out.println(controlador.ventas.get(i).getCliente());
            System.out.println(controlador.ventas.get(i).getProducto());
            System.out.println(controlador.ventas.get(i).getPrecio());
            System.out.println(controlador.ventas.get(i).getCantidad());
            System.out.println(controlador.ventas.get(i).getVendedor());
            //precio ventas cantidad
            System.out.println("Total: "+controlador.ventas.get(i).getPrecio()*controlador.ventas.get(i).getCantidad());
            
            

        }

        public static void verBuscado(Venta venta){
            System.out.println("Se encontró la venta");
            System.out.println(venta.getNumVebta());
            System.out.println(venta.getCliente());
            System.out.println(venta.getProducto());
            System.out.println(venta.getPrecio());
            System.out.println(venta.getCantidad());
            System.out.println(venta.getVendedor());
            System.out.println("Total: "+venta.getPrecio()*venta.getCantidad());

        }
    }
}

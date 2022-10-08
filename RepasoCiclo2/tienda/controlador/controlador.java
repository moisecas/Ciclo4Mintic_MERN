package tienda.controlador;

import java.text.BreakIterator;
import java.util.InputMismatchException;
import java.util.Scanner;

import tienda.vista.vista;

public class controlador {
    public static Scanner input = new Scanner(System.in); //crea un objeto de tipo scanner para poder leer datos del teclado


    //crea metodo
    public void trabajar(){ //punto de partida, vamos a llamar otros metodos desde aquí 
        //switch 
        int opcion = 0;
        do{
            vista vista1 = new vista(); //crea un objeto de tipo vista
            vista1.menuPrincipal(); //llama al metodo menuPrincipal de la clase vista
            opcion = input.nextInt(); //lee el dato que ingresa el usuario
            switch(opcion){
                case 1:
                    ingresarVenta();
                    break;
                case 2:
                    buscarVenta();
                    break;
                case 3:
                    modificarVenta();
                    break;
                case 4:
                    eliminarVenta();
                    break;
                case 5:
                    verListaVenta();
                    break;
                case 6:
                    System.out.println("Gracias por usar el programa");
                    break;
                default:
                    System.out.println("Opción no válida");
                    break;
            }




        // while(true){  //ciclo infinito para que el menu se repita hasta que el usuario seleccione la opcion 6
        //     menuPrincipal(); //llama al metodo menuPrincipal de la clase vista 
        // int opcion = capturaOpcion(); //llama al metodo capturaOpcion de la clase controlador
        // if(opcion == 1){ //verificando que opción me dio el usuario 
        //     ingresar();
        // }else if(opcion == 2){
        //     buscar();
        // }else if(opcion == 3){
        //     modificar();
        // }else if(opcion == 4){
        //     eliminar();
        // }else if(opcion == 5){
        //     ver();
        // }else{
        //     System.out.println("adios");
        //     Break 
        // }

        // }
        
        
    }
    public static int capturaOpcion(){ //validar que el usuario ingrese un numero entero de acuerdo a las opciones del menu
        int opcion = 0;
        while(opcion < 1 || opcion > 6){
            System.out.println("Ingrese una opción");
            try{ //descarta que el usuario ingrese un caracter que no sea un numero

                opcion = input.nextInt(); //lee el numero entero que ingresa el usuario
                input.nextLine(); //limpia el buffer de entrada de datos para que no se quede colgado el programa

            }catch(InputMismatchException e){ //captura el error que se genera cuando el usuario ingresa un caracter que no sea un numero
                System.out.println("Ingrese una opción válida");
                input.nextLine(); //limpia el buffer de entrada de datos para que no se quede colgado el programa
            }
            }
        return opcion; //devuelve el numero entero que ingresa el usuario
        }
    }

    //metodo ingresar venta
    public void ingresarVenta(){
        long miliseconds = System.currentTimeMillis(); //captura la fecha y hora actual del sistema
        Date fecha = new Date(miliseconds); //convierte la fecha y hora actual del sistema en un objeto de tipo Date
        System.out.println("Ingrese el numero de venta");
        int numeroVenta = input.nextInt();
        input.nextLine()

        System.out.println("Ingrese el nombre del cliente");
        String nombreCliente = input.nextLine();

        System.out.println("Producto comprado");
        String producto = input.nextLine();

        System.out.println("Ingrese el precio del producto");
        double precio = input.nextDouble();

        System.out.println("Ingrese la cantidad de productos");
        int cantidad = input.nextInt();
        input.nextLine()

        System.out.println("Ingrese el nombre del vendedor");
        String nombreVendedor = input.nextLine();

        //crea un objeto de tipo venta
        venta venta1 = new venta(numeroVenta, fecha, nombreCliente, producto, precio, cantidad, nombreVendedor); //crea un objeto de tipo venta
        this.ventas.add(venta1); //agrega el objeto venta1 a la lista de ventas 
        System.out.println("Venta ingresada con éxito");

    }
}

//arrays o arreglos 
//retorne en un arreglo la suma de  las edades de la familia
//edad mayor
//edad menor 
//la suma de todas las edades 

public class main {
    public static int [] sumaEdades(int [] edades){ //devolución de un arreglo, recibe un arreglo de enteros
        
        //la edad menor
        int edadMenor = edades[0]; //voy a guardar la edad menor en la posición 0, desde la posición 0 voy a comparar 
        //for para recorrer
        for(int i = 0; i < edades.length; i++){ //i inicializa en 0, mientras i sea menor a la longitud del arreglo, incrementa en 1
            if(edadMenor > edades[i]){ //si la edad menor es mayor a la edad en la posición i
                edadMenor = edades[i]; //la edad menor va a ser igual a la edad en la posición i
            }
        }
        //la edad mayor
        int edadMayor = edades[0]; //voy a guardar la edad mayor en la posición 0, desde la posición 0 voy a comparar
        //for para recorrer
        for(int i = 0; i < edades.length; i++){ //i inicializa en 0, mientras i sea menor a la longitud del arreglo, incrementa en 1
            if(edadMayor < edades[i]){ //si la edad mayor es menor a la edad en la posición i
                edadMayor = edades[i]; //la edad mayor va a ser igual a la edad en la posición i
            }
        }

        //la suma de todas las edades
        int sumaEdades = 0; //voy a guardar la suma de las edades en la posición 0, desde la posición 0 voy a sumar
        //for para recorrer
        for(int i = 0; i < edades.length; i++){ //i inicializa en 0, mientras i sea menor a la longitud del arreglo, incrementa en 1
            sumaEdades += edades[i]; //la suma de las edades va a ser igual a la suma de las edades + la edad en la posición i
        }

        

        return new int [] {edadMenor, edadMayor, sumaEdades}; //devuelvo un arreglo de enteros
    }
}
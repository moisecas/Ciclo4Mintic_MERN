package papelería;

public class papeleria { //superclase 
    //clase empleado
    public class Empleado { //subclase de papeleria
        //atributos, si no voy a hacer operaciones matemáticas no se requiere que sean numeros o int
        private String nombre;
        private String identificacion;
        private String correo;
        private String telefono;
       
        //crear un empleado, creamos un constructor para inicializar los atributos, objeto de la clase empleado
        public Empleado(String nombre, String identificacion, String correo, String telefono) {
            this.nombre = nombre;
            this.identificacion = identificacion;
            this.correo = correo;
            this.telefono = telefono;
        }

        //constructor vacio
        public Empleado() { //constructor vacio para poder crear un objeto de la clase empleado sin inicializar los atributos
        } 

        //getters y setters
        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public String getIdentificacion() {
            return identificacion;
        }

        public void setIdentificacion(String identificacion) {
            this.identificacion = identificacion;
        }

        public String getCorreo() {
            return correo;
        }

        public void setCorreo(String correo) {
            this.correo = correo;
        }

        public String getTelefono() {
            return telefono;
        }

        public void setTelefono(String telefono) {
            this.telefono = telefono;
        }

        //crear Empleado
        public void main (String [] args){
            Empleado empleado1 = new Empleado("Juan", "123456789", "correo", "telefono");
            Empleado empleado2 = new Empleado("Pedro", "123456789", "correo", "telefono");
            Empleado empleado3 = new Empleado("Maria", "123456789", "correo", "telefono");
            Empleado empleado4 = new Empleado("Luis", "123456789", "correo", "telefono");
            System.out.println(empleado1.getNombre()); 
            System.out.println(empleado2.getNombre());
            System.out.println(empleado3.getNombre());
            System.out.println(empleado4.getNombre());

        }

        
        



        

        

       




    }
    
   

    
}
    


// interface
interface Message {
    String greet();
 }
 
 public class My_class_arg {
    // method which accepts the object of interface Message
    public void displayMessage(Message m) {
       System.out.println(m.greet() +
          ", This is an example of anonymous inner class as an argument");  
    }
 
    public static void main(String args[]) {
       // Instantiating the class
       My_class_arg obj = new My_class_arg();
 
       // Passing an anonymous inner class as an argument
       obj.displayMessage(new Message() {
          public String greet() {
             return "Hello";
          }
       });
    }
 }
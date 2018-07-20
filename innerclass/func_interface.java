public class func_interface {
    public static void main(String[] args) {
      new Thread(new Runnable() {
        @Override
        public void run() {
          System.out.println("A thread created and running ...");
        }
      }).start();
    }
  }
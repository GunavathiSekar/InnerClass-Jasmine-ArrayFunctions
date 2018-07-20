import java.util.Arrays;
import java.util.List;

public class Array1 {
        public static void main(String[] args) {
                List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);
                System.out.println(numbers.stream().filter(e -> e % 2 == 0).map(e -> e).reduce(10, Integer::sum));
                // System.out.println(numbers.stream().filter(e -> e % 2 == 0).map(e -> e * 2).reduce(0, Integer::sum));
        }
}
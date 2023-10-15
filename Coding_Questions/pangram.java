package corejava;
import java.util.*;

public class Corejava {
    public static void main(String[] args) {
         Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence: ");
        String input = scanner.nextLine().toLowerCase(); 
        boolean isPangram = checkPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean checkPangram(String input) {
        Set<Character> alphabetSet = new HashSet<>();

        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                alphabetSet.add(c);
            }
        }

        return alphabetSet.size() == 26;
    }
}

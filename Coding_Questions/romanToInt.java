package corejava;

import java.util.*;

public class Corejava {

    public static int romanToInt(String s) throws IllegalArgumentException {

        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            char currentChar = s.charAt(i);
            if (!romanValues.containsKey(currentChar)) {
                throw new IllegalArgumentException("Invalid Roman numeral: " + currentChar);
            }
            int curValue = romanValues.get(currentChar);

            if (curValue < prevValue) {
                result -= curValue;
            } else {
                result += curValue;
            }

            prevValue = curValue;
        }

        return result;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");
        String romanNumeral = scanner.nextLine().toUpperCase();
        scanner.close();

        try {
            int integerEquivalent = romanToInt(romanNumeral);
            System.out.println(romanNumeral + " = " + integerEquivalent);
        } catch (IllegalArgumentException e) {
            System.err.println("Error: " + e.getMessage());
        }

    }
}

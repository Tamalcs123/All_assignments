package corejava;

import java.util.*;

public class Corejava {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter the number of elements: ");
        int numElements = scanner.nextInt();
        
        ArrayList<Integer> list = new ArrayList<>();
        
        System.out.println("Enter " + numElements + " elements:");
        for (int i = 0; i < numElements; i++) {
            int element = scanner.nextInt();
            list.add(element);
        }

        Collections.shuffle(list);

        System.out.println("Shuffled list: " + list);
    }
}

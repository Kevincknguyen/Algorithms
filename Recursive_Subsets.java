import java.util.ArrayList;
import java.util.List;

class Recursive_Subsets{
    public static void main(String[] args){

        System.out.println("Hello");
        List<List<Integer>> result= new ArrayList();
        
        result.add(new ArrayList<Integer>(){{add(5);}});

        List<List<Integer>> output= new ArrayList();
        output.add(new ArrayList<Integer>(result.get(0)) {{add(7);}});
        System.out.println(result);
        System.out.println(output);
    }
}

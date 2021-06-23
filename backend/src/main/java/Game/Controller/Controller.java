package Game.Controller;
 
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/controller")
@RestController
public class Controller {

 
    @PostMapping("/startNewGame")
    public void startNewGame( ) {
        System.out.println("User started new Game!"); 
    }
    
    @PostMapping("/score")
    public void score(@RequestBody String payload) { 
        System.out.println(payload); 
    }
}



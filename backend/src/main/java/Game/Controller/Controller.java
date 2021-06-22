package Game.Controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/controller")
@RestController
public class Controller {

    @GetMapping("/")
    public String getAll() {
        return "im alive";
    }


    @PostMapping("/startNewGame")
    public void createApplicant( ) {
        System.out.println("User started new Game!");
    }
}

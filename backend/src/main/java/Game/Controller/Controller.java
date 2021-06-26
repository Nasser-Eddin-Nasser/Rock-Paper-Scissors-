package Game.Controller;



import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Model.Score;

@RequestMapping("api/controller")
@RestController
public class Controller {

	@PostMapping("/startNewGame")
	public ResponseEntity<String> startNewGame() {
		try {
			System.out.println("startNewGame");
			return ResponseEntity.status(HttpStatus.ACCEPTED).body("Good Luck!");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}

	}

	@PostMapping("/score")
	public ResponseEntity<Score> score(@RequestBody Score score) { 
			System.out.println(score);  
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(score);
		 
	}

	@GetMapping("/error")
	public ResponseEntity<String> sendError() {
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception");
	}

}

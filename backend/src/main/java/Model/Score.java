package Model;

public class Score {
	public int wins;
	public int lost;

	public Score() {
	}

	public Score(int wins, int lost) {
		this.wins = wins;
		this.lost = lost;
	}

	public Score(String wins, String lost) {
		try {
			this.wins = Integer.parseInt(wins);
			this.lost = Integer.parseInt(lost);
		} catch (NumberFormatException e) {
			System.err.println(e.getMessage());
		}

	}

	public String toString() {
		return "Wins: '" + this.wins + "', Lost: '" + this.lost;
	}
}

package Game.Model;

public class Score {
	private int wins;

	private int lost;

	public Score() {
	}

	public Score(int wins, int lost) {
		try {
			this.wins = wins;
			this.lost = lost;
		} catch (NumberFormatException e) {
			System.err.println(e.getMessage());
		}

	}

	public Score(String wins, String lost) {
		this(Integer.parseInt(wins), Integer.parseInt(lost));

	}

	public int getWins() {
		return wins;
	}

	public int getLost() {
		return lost;
	}

	public String toString() {
		return "Wins: '" + this.wins + "', Lost: '" + this.lost;
	}
}

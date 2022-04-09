class scoresList {
    constructor({ player, score }) {
      this.player = player;
      this.score = score;
    }
  
    tojson() {
      return JSON.stringify({
        user: this.player,
        score: this.score,
      });
    }
} 

class urlLinks {
    static gameURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
    static gameID = 'jqDw3pUzcoMuvEde4YUu';
    static link = `${this.gameURL}/games/${this.gameID}/scores/`;
}

class newAPI {
   static enterForm = async (score) => {
      const response = await fetch(urlLinks.link, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: score,
      });
      const feedback = await response.json();
      return feedback;
    };

    static scoreValue = async () => {
      const response = await fetch(urlLinks.link, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const feedback = await response.json();
      return feedback;
    };
}
export {scoresList, newAPI};
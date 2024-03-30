describe('Movie Details UI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' }).as('getMovies');
    cy.wait('@getMovies')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { fixture: 'detailsBlackAdam.json' }).as('getMovieDetails');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', { fixture: 'detailsBlackAdamTeaser.json' }).as('getBlackAdamTeaser');
    cy.get(".all-movies").contains("h3", "Black Adam").click()
    cy.wait('@getMovieDetails')
    cy.wait('@getBlackAdamTeaser')
  }),

    it('Should load all movie posters and allow user to click and display more details', () => {
      cy.get(".movie-detail").contains("h2", "Black Adam")
        .get(".movie-detail").contains("h3", "The world needed a hero. It got Black Adam.")
        .get("article").contains("p", "Avg Rating: 🤮 4")
        .get("article").contains("p", "Action • Fantasy • Science Fiction")
        .get("article").contains("p", "125 minutes")
        .get("section").contains("p", "Oct 18, 2022")
        .get("section").contains("p", "$200,000,000")
        .get("section").contains("p", "$384,571,691")
        .get("section").contains("p", "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.")
        .get("iframe")
    }),

    it('Should allow user to return to main page and click on another movie to display details', () => {
      cy.get(".return-home").contains("Back to Movies").click()
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/505642', { fixture: 'detailsWakanda.json' }).as('getMovieDetailsAgain');
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/505642/videos', { fixture: 'detailsWakandaTeaser.json' }).as('getWakandaTeaser');
      cy.get(".all-movies").contains("h3", "Black Panther: Wakanda Forever").click()
      cy.wait("@getMovieDetailsAgain")
      cy.wait("@getWakandaTeaser")
      cy.get(".movie-detail").contains("h2", "Black Panther: Wakanda Forever")
        .get(".movie-detail").contains("h3", "Forever.")
        .get("article").contains("p", "Avg Rating: 🔥 6.5")
        .get("article").contains("p", "Action • Adventure • Science Fiction")
        .get("article").contains("p", "162 minutes")
        .get("section").contains("p", "Nov 8, 2022")
        .get("section").contains("p", "$250,000,000")
        .get("section").contains("p", "$733,000,000")
        .get("section").contains("p", "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.")
        // .get("iframe")
    })

})
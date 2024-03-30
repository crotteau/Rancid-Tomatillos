describe('Headliner Component', () => {
  it('successfully loads a randomly chosen movie', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' }).as('getMovies');
    cy.visit('http://localhost:3000/');
    cy.wait('@getMovies');
    cy.get('.headliner-pick').should('contain', 'Today\'s Pick')
    .get('span').should('contain', 'Release Date')
    .get('span').should('contain', 'Avg Rating')
    .get('.headliner-button').should('contain', 'More Details')
  });
});
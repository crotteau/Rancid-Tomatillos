describe('MovieList Component', () => {
  it('successfully loads and displays movies', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' }).as('getMovies');
    cy.visit('http://localhost:3000/');
    cy.wait('@getMovies');
    cy.get('.movies-container').should('exist');
    cy.get('.movies-container').find('div').should('have.length.at.least', 1);
  });
});
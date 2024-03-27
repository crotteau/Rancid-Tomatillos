describe('Movie Details UI', () => {

  it('Should load all movie posters and allow you to click to display more details', () => {
    cy.visit('http://localhost:3000/')
      .get("div").contains("h3", "The Woman King").click()
      .get("div").contains("h2", "The Woman King")
      .get("div").contains("h3", "Her reign begins.")
      .get("article").contains("p", "Avg Rating: 🔥 7")
      .get("article").contains("p", "Action • Drama • History")
      .get("article").contains("p", "135 minutes")
      .get("section").contains("p", "Budget: $50,000,000")
      .get("section").contains("p", "Revenue: $91,000,000")
  })

})


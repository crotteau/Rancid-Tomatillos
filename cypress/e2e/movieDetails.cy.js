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




// cy.contains("Feedback Loop")
// .get("form").contains("h2", "Please Sign In")
// .get("input[name='email']").type("leta@turing.io")
// .get("input[name='password']").type("keane20")
// .get('button').click()
// .url().should("include", "/dashboard")

// {
//   "id": 724495,
//   "poster_path": "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
//   "backdrop_path": "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
//   "title": "The Woman King",
//   "average_rating": 7,
//   "release_date": "2022-09-15"
// }
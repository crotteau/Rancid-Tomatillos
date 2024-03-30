# Rancid Tomatillos
## About
Everyone's heard about Rotten Tomatoes, but have you heard about Rancid Tomatillos? This movie app lets you view ratings, movie descriptions, teasers, and more! All nicely distilled into a simple, user-friendly site.

## Contributors
- [Theo McCray](https://github.com/Virulencies)
- [Megan Crotteau](https://github.com/crotteau)

## Preview

![Home Page View](https://imgur.com/BWCY0sV)

![Detailed Movie Info View](https://imgur.com/pXv2iqX)

## Technologies Used
<div>
  <img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E' alt='javascript'/>
  <img src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt='html'/>
  <img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' alt='react'/>
  <img src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white' alt='react-router'/>
  <img src='https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white' alt='cypress'/>
  <img src='https://img.shields.io/badge/Lighthouse-F44B21?style=for-the-badge&logo=Lighthouse&logoColor=white' alt='lighthouse'/>
</div>

## Installation Instructions
- `clone` this [repository](https://github.com/Virulencies/Rancid-Tomatillos) to your machine
- `cd` into project directory
- run `npm i` to install dependencies
- run `npm start` and open http://localhost:3000 in your browser
- when finished, run `ctrl + c` to stop running local server

## Background
The goals of this project were to:
- Gain competency with React fundamentals
- Test React components & asynchronous JS
- Create a multi-page UX using Router

This app was created by two developers who are 4 months into a Front End coding program. We spent approximately 30 hours creating this project and it was our first introduction to using React. 

## Future Directions and Additions
- Add search feature for movie title or genres
- Improve app responsiveness to varying screen sizes
- Write more robust Cypress tests
- Improved carousel scrolling functionality
- Login/account creation functionality

## Challenges and Wins

This being the first fully fledged React project that either of us has worked on, getting accustomed to prop usage, dividing up functionality between components, and the other nuances unique to React proved to be a challenge. There were multiple occasions where props were mishandled or that we were not passing the correct data to a component properly. As the project progressed, however, we were able to refactor and pass down data without much issue. 

Another prominent challenge we faced came with the fetch requests and data not populating by the time the page would render properly. Our win for this challenge was when we ended up successfully rendering loading states asynchronously while waiting on the data to fully populate into their fields.

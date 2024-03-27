import React from 'react'
import MovieList from './MovieList'

describe('<MovieList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MovieList />)
  })
})
describe ('Favorite page user flow', () => {

  it('Should have a header with Just a Thought on page load', () => {
    cy.visit('http://localhost:3000/favorites').contains('h1', 'Just a Thought')
  })

  it('Should have a Home button', () => {
    cy.get('.home-link').should('have.text', 'Home').click()
  })

  it('Should have a Favorites button', () => {
    cy.get('.favorites-link').should('have.text', 'Favorites').click()
  })

  it('Should take the user to the main dashboard page on button click', () => {
    cy.get('.home-link').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should display a no-favorites message if no advice has been favorited', () => {
    cy.visit('http://localhost:3000/favorites')
    cy.contains('You have no favorites yet! Click the Home button to see and save your favorite advice.')
  })

  it('Should display a favorited piece of advice on Favorites page', () => {
    cy.intercept('https://api.adviceslip.com/advice', {fixture: 'advice-info.json'})
    .visit('http://localhost:3000/')
    cy.get('.advice-button').should('be.visible').click()
    cy.wait(2000)
    cy.get('.save-favorites-button').should('be.visible').click()
    cy.wait(2000)
    .visit('http://localhost:3000/favorites')
    cy.wait(2000)
    cy.get('h2').contains('Hold the door open for the next person.')
  })

})

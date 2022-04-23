describe ('Feedback loop user flows', () => {
  it('Should confirm true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Should have a header with Just a Thought on page load', () => {
    cy.visit('http://localhost:3002/').contains('h1', 'Just a Thought')
  })

  // test buttons are on page load


  it('Should have a Home button', () => {
    cy.get('.home-link').should('have.text', 'Home').click()
  })

  it('Should have an Advice button', () => {
    cy.get('.advice-button').should('have.text', 'Give Me Advice')
  })

  it('Should have a Save to Favorites Button', () => {
    cy.get('.save-favorites-button').should('have.text', 'Save to Favorites')
  })

  it('Should have a Favorites button', () => {
    cy.get('.favorites-link').should('have.text', 'Favorites').click()
  })


  it('Should take the user to the Favorites page on button click', () => {
    cy.get('.favorites-link').click()
    cy.url().should('eq', 'http://localhost:3002/favorites')
  })

  //add fetch testing on button click
})

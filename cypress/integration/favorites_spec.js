describe ('Feedback loop user flows', () => {
  it('Should confirm true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Should have a header with Just a Thought on page load', () => {
    cy.visit('http://localhost:3002/favorites').contains('h1', 'Just a Thought')
  })
//test buttons
  it('Should have a Home button', () => {
    cy.get('.home-link').should('have.text', 'Home').click()
  })

  it('Should have a Favorites button', () => {
    cy.get('.favorites-link').should('have.text', 'Favorites').click()
  })

  it('Should take the user to the main dashboard page on button click', () => {
    cy.get('.home-link').click()
    cy.url().should('eq', 'http://localhost:3002/')
  })

})


// test advice is on page

//if saved, test all advice is on page

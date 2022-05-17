describe('Items page', () => {

  beforeEach(() => {
    cy.visit('/items')
  })

  it('should view items page and redirect to detail page', () => {
    cy.get('[data-test-id="search_input"]').click()
    cy.get('[data-test-id="search_input"]').type('iphon')
    cy.get('[data-test-id="search_clic"]').click()

    cy.get('[data-test-id="card-image"]')
      .should('have.css', 'width', '180px')
    cy.get('[data-test-id="card-image"]')
      .should('have.css', 'height', '180px')
    cy.get('[data-test-id="card-image"]')
      .should('have.css', 'border-radius', '4px')

    cy.get('[data-test-id="card_product_title"]')
      .should('have.css', 'font-size', '24px')
    cy.get('[data-test-id="card_product_info"]')
      .should('have.css', 'font-size', '18px')
    cy.get('[data-test-id="card_product_ditional-info"]')
      .should('have.css', 'font-size', '12px')

    cy.wait(3000)
    cy.get('[data-test-id="card_product_clic"]').first().click()
  })
})

describe('Detail page', () => {

  beforeEach(() => {
    cy.visit('/item/MLA1129757544')
  })

  it('should view detail page and show product info', () => {

    // cy.get('[data-test-id="buy-detail-image"]')
    //   .should('have.css', 'width', '680px')
    // cy.get('[data-test-id="buy-detail-sales"]')
    //   .should('have.css', 'font-size', '14px')
    // cy.get('[data-test-id="buy-detail-description"]')
    //   .should('have.css', 'font-size', '24px')
    // cy.get('[data-test-id="buy-detail-price"]')
    //   .should('have.css', 'font-size', '46px')
    // cy.get('[data-test-id="button-blue"]')
    //   .should('have.css', 'background-color', 'rgb(52, 131, 250)')

  })

})

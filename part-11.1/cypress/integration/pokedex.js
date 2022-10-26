describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate from front page to a particular pokemon', function () {
    cy.visit('http://localhost:5000')
    cy.contains('wailord').click()
    cy.contains('water veil')
  })
})

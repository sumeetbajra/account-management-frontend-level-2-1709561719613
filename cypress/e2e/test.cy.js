
describe('Personal Library App - Book Manager', () => {
  it('Allows users to add a book to the library and displays it in the list', () => {
    cy.visit('/')

    // Add a book
    const bookTitle = 'The Great Gatsby'
    const bookAuthor = 'F. Scott Fitzgerald'
    cy.get('[data-test="book-title-input"]').type(bookTitle)
    cy.get('[data-test="book-author-input"]').type(bookAuthor)
    cy.get('[data-test="add-book-button"]').click()
    cy.get('[data-test="book-list"]').contains(bookTitle).should('exist')
    cy.get('[data-test="book-list"]').contains(bookAuthor).should('exist')
  })

  it('Prevents adding a book with empty title or author', () => {
    cy.visit('/')

    // Try to add a book with empty title
    const bookAuthor = 'F. Scott Fitzgerald'
    cy.get('[data-test="book-title-input"]').type(' ')
    cy.get('[data-test="book-author-input"]').type(bookAuthor)
    cy.get('[data-test="add-book-button"]').click()
    cy.get('[data-test="book-list"]').should('not.contain', ' ')

    // Try to add a book with empty author
    const bookTitle = 'The Great Gatsby'
    cy.get('[data-test="book-title-input"]').clear().type(bookTitle)
    cy.get('[data-test="book-author-input"]').clear().type(' ')
    cy.get('[data-test="add-book-button"]').click()
    cy.get('[data-test="book-list"]').should('not.contain', bookTitle)
  })

  it('Allows users to remove a book from the library', () => {
    cy.visit('/')

    // First add a book
    const bookTitle = '1984'
    const bookAuthor = 'George Orwell'
    cy.get('[data-test="book-title-input"]').type(bookTitle)
    cy.get('[data-test="book-author-input"]').type(bookAuthor)
    cy.get('[data-test="add-book-button"]').click()
    cy.get('[data-test="book-list"]').contains(bookTitle).parent().find('[data-test="remove-book-button"]').click()
    cy.get('[data-test="book-list"]').should('not.contain', bookTitle)
  })
})

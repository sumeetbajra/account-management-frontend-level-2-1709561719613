# Personal Library App - Book Manager

Your task is to build a frontend app that allows users to manage a personal library by adding and removing books. This app will be a single-page application that interacts with the user's input without the need for an external API.

Please agree with your hiring team regarding the tech stack choice. However, we recommend using Next.js, React, TypeScript, and Styled Components. Additionally, you should write unit tests using Jest and React Testing Library to ensure the components work as expected.

## App Description

The app should allow users to add books to their personal library and display them in a list. Each book has a title and an author. Users should also be able to remove books from the library.

### Frontend Requirements

The main functionalities your app must support are:

1. **Adding a book**: A user can add a book by specifying its title and author. Both fields are required.
2. **Validating input**: The app should prevent adding a book if the title or author is empty.
3. **Displaying books in a list**: After adding a book, it should be displayed in a list showing its title and author.
4. **Removing a book**: A user can remove a book from the list.

Here's the UI mockup with hints:

![Personal Library App](https://user-images.githubusercontent.com/450319/142798772-9e4b2744-447c-411f-9b04-7028ba5e89a1.png)

Feel free to tweak the UI, but please ensure that the following HTML data attributes are in place for the Cypress tests to work.

#### The form for adding a book

```html
<form ...>
  <input data-test="book-title-input" ... />
  <input data-test="book-author-input" ... />
  <button data-test="add-book-button" ...>Add Book</button>
</form>
```

Both input **fields should be cleared** after a book is successfully added.

#### Books list

Each book added to the list should have an enclosing `<div />` (or any other container element you prefer) with the title and author displayed. Additionally, include a button to remove the book, ensuring the following structure:

```html
<div data-test="book-list">
  <div ...>
    <span ...>${bookTitle}</span>
    <span ...>${bookAuthor}</span>
    <button data-test="remove-book-button" ...>Remove</button>
  </div>
  ...
</div>
```

- `${bookTitle}` - the title of the book.
- `${bookAuthor}` - the author of the book.

### Additional Requirements

- Implement client-side validation of the form data. The "Add Book" button should be disabled or not add the book if the title or author fields are empty or contain only whitespace.
- Implement error handling for user interface elements. Though there's no external API, consider displaying informative messages if adding/removing a book fails due to unexpected circumstances.
- Unit test at least one component of your choice. There is no need to test the whole app, as we only want to understand what you take into consideration when writing unit tests.
- Avoid duplication and extract re-usable components where it makes sense. We want to see your approach to creating a codebase that is easy to maintain.

Focus on writing clean, readable code. We're interested in your ability to follow specifications and implement functionality that works and looks good. Good luck!
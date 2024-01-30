# Auto-Complete Component in React

This project demonstrates a simple implementation of an auto-complete feature using React functional components and hooks. It shows how real-time suggestions can be offered to users as they type in an input field.

## Features

- **Dynamic Search Suggestions**: Provides immediate feedback by displaying a list of country suggestions that match the user's input.
- **Selection Interaction**: Allows users to select a suggested country from the dropdown, displaying the chosen country's name and flag to confirm the selection.
- **Emoji Flags**: Provide some visual feedback by representing each country with its corresponding flag emoji above the country name for a nice user experience.
- **Loading Text**: Let's the user know when the query is being handled.

## Tech Stack

- **React**: Built with functional components and hooks (`useState`, `useEffect` etc) for managing state and side effects.
- **CSS**: Basic styling to ensure a clean and straightforward user interface.
- **Express**: A simple server to provide the client with mock data upon request.

## Data

The server uses a predefined array of country names as mock data for suggestions. There is one country for each letter of the alphabet (apart from "X"!).

```javascript
const mockData = [

  { id: 1, name: "Australia", flag: "🇦🇺" },
  { id: 2, name: "Brazil", flag: "🇧🇷" },
  { id: 3, name: "Canada", flag: "🇨🇦" },

...
```

## Running the Project

To run this project locally:

1. **Clone the Repository**: Use `git clone` to copy the project to your local machine.
2. **Install Dependencies**: Navigate to the project directory and execute `npm install`.
3. **Run the Server**: In the root directory run `node server.js` to start the backend that serves up country data. (Running on port 8000)
4. **Start the Application**: In another terminal also root level - launch the React app by running `npm start`. It should automatically open in your default web browser.(Running on port 3000)

## Production Considerations

For a production-ready application, I would consider the following enhancements:

- **API Integration**: Fetch suggestions from a live backend service.
- **Input Debouncing**: Implement debouncing to minimize the rate of API calls as the user types.
- **Accessibility**: Ensure full keyboard navigation and screen reader support.
- **Advanced Styling**: Use a CSS preprocessor or CSS-in-JS for more dynamic styling.
- **Testing**: Incorporate a testing framework eg. Jest along with React Testing Library for comprehensive testing.
- **Security**: Sanitise inputs to prevent XSS and secure API communications.

. . . . . . . . . . . . . . . . . . . .

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

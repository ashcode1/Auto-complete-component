## Part 1

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
- **Input Debouncing**: Implement debouncing to minimise the rate of API calls as the user types.
- **Accessibility**: Ensure full keyboard navigation and screen reader support.
- **Advanced Styling**: Use a CSS preprocessor or CSS-in-JS for more dynamic styling.
- **Testing**: Incorporate a testing framework eg. Jest along with React Testing Library for comprehensive testing.
- **Security**: Sanitise inputs to prevent XSS and secure API communications.

## Part 2

### 1. What is the difference between Component and PureComponent? Give an example where it might break my app.

`Component` is the base class for React components when defined using ES6 classes and doesn't implement `shouldComponentUpdate()`, meaning every `setState()` call results in a re-render by default unless `shouldComponentUpdate()` is manually invoked. `PureComponent`, on the other hand, extends `Component` and adds a shallow comparison on the props and state to decide if the component should update, preventing unnecessary renders for components with simple props and state.

**Example where it might break your app:** Using `PureComponent` can lead to issues if your component relies on deep object comparison or expects to re-render on mutable data changes. If an object within `props` or `state` is modified (not replaced), `PureComponent` might fail to re-render because the shallow comparison doesn't detect the change.

### 2. "Context" and "ShouldComponentUpdate" might be dangerous. Why is that?

Using `Context` to pass down data bypasses the component's `shouldComponentUpdate` method, which can lead to stale renders if a component is optimised to prevent updates with `shouldComponentUpdate` but does not re-render when the context value changes. This issue is a problem for components deep in the hierarchy that rely on context values and also try to optimise renders with `shouldComponentUpdate`.

### 3. Describe 3 ways to pass information from a component to its PARENT.

- **Callbacks:** The parent passes a function to the child as a prop. The child invokes this function, passing it data, allowing the parent to receive this data.
- **Lifting Up State:** Shared state is moved up to the closest common ancestor of components needing the same changing data. The parent then passes the state down to the children via props.
- **Context API:** Context can be used to pass data back up by providing a function from the parent that updates the parent's state, which the child can call via context.

### 4. Give 2 ways to prevent components from re-rendering.

- **shouldComponentUpdate:** Implement this lifecycle method in class components to return `false` if the current props and state should not trigger a re-render.
- **React.memo:** Wrap functional components with `React.memo` for a shallow comparison of props, preventing re-rendering if props have not changed.

### 5. What is a fragment and why do we need it? Give an example where it might break my app.

A `Fragment` allows grouping a list of children without adding extra nodes to the DOM, useful for wrapping multiple elements returned from a component without introducing a DOM element like `div`.

**Example where it might break your app:** If your layout or styling relies on a DOM element (e.g. a `div` or `span` for styling or positioning), replacing it with a `Fragment` will remove that element from the DOM, potentially breaking your layout or styling.

### 6. Give 3 examples of the HOC pattern.

- **withTheme:** Would provide the necessary theme-related props to a component, so the wrapped component can easily access and apply the appropriate styles based on the provided theme.
- **withLoading:** Could add loading state management to a component, showing a loading indicator while data is being fetched.
- **withRouter:** Would provide routing-related props (like `history`, `location`, `match`) to a component when using React Router.

### 7. What's the difference in handling exceptions in promises, callbacks and async...await?

- **Promises:** Use the `.catch()` method to catch errors.
- **Callbacks:** Handle errors within the callback function, usually with the first argument reserved for an error object.
- **Async/await:** Use `try/catch` blocks to handle exceptions.

### 8. How many arguments does setState take and why is it async?

`setState` takes two arguments: an updater function or object specifying state changes, and a callback function that executes after `setState` is completed and the component has re-rendered. It is asynchronous to optimise performance by batching state updates, preventing excessive re-renders for each `setState` call.

### 9. List the steps needed to migrate a Class to Function Component.

- Replace the class definition with a function.
- Convert state using `useState` hooks.
- Replace lifecycle methods with `useEffect` hooks.
- Convert instance methods into functions within the functional component.
- Replace `this.props` and `this.state` with props and state from hooks.

### 10. List a few ways styles can be used with components.

- **Inline styles:** Using the `style` prop with a JavaScript object.
- **CSS Stylesheets:** Importing CSS files and using class names.
- **CSS Modules:** Scoped CSS where class names are locally scoped to the component.
- **Styled-components:** Using tagged template literals to style components.

### 11. How to render an HTML string coming from the server.

Use the `dangerouslySetInnerHTML` prop to set HTML content directly from a string, named dangerously because it can expose your application to cross-site scripting (XSS) attacks if the HTML is not properly sanitised.

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
It correctly bundles React in production mode and optimises the build for the best performance.

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

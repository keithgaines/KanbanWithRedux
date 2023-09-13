# Kanban with Redux Web App

This README provides an overview of the project along with relevant code snippets and explanations.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Redux](#redux)
- [PropTypes Validation](#proptypes-validation)
- [Acknowledgements](#acknowledgements)

---

## Introduction

This project is a React-based web application that allows users to manage tasks on a digital board. It incorporates features like task drag-and-drop, dark mode functionality, and utilizes Redux for state management.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

```shell
git clone <repository-url>
```

2. Install dependencies:

```shell
npm install
```

3. Start the development server:

```shell
npm start
```

The application should now be running on your local machine.

## Usage

### Dark Mode

The project includes a `useDarkMode` custom hook to enable dark mode functionality. This hook manages the application's theme, toggling between "dark" and "light" modes. It uses local storage to persist the selected theme.

Here's a code snippet from `useDarkMode`:

```javascript
import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;
```

### Redux

Redux is used for state management in this project. It provides two key functions for interacting with the global state: `useDispatch` and `useSelector`.

#### `useDispatch`

The `useDispatch` hook is used to dispatch actions to the Redux store. It allows components to trigger state changes by dispatching actions to reducers. In the code snippet below, `dispatch` is used to dispatch a `dragTask` action:

```javascript
import { useDispatch } from "react-redux";
import boardsSlice from "../redux/boardsSlice";

// ...

const dispatch = useDispatch();

// ...

dispatch(boardsSlice.actions.dragTask({ colIndex, prevColIndex, taskIndex }));
```

#### `useSelector`

The `useSelector` hook is used to access the state from the Redux store. It allows components to subscribe to specific pieces of state and receive updates when that state changes. In the code snippet below, `useSelector` is used to retrieve the `boards` state:

```javascript
import { useSelector } from "react-redux";

// ...

const boards = useSelector((state) => state.boards);
```

## PropTypes Validation

The code includes PropTypes validation to ensure that the expected props are passed to the `Column` component. PropTypes help catch errors and provide meaningful warnings during development.

Here's an example of PropTypes validation for the `colIndex` prop in the `Column` component:

```javascript
import PropTypes from "prop-types";

// ...

Column.propTypes = {
  colIndex: PropTypes.number.isRequired,
};
```

In this case, `colIndex` is defined as a required prop of type `number`. If the `colIndex` prop is not provided or is of the wrong type, a warning will be shown during development, helping to catch potential issues early in the development process.

## Acknowledgements

I would like to extend my gratitude to [Hesam Azizpour](https://www.linkedin.com/in/hesam-azizpour-23259b265/), whose educational content and course on YouTube have been invaluable in helping me gain a better understanding of front-end development and working with Redux. His YouTube course, available [here](https://www.youtube.com/watch?v=3RWMktZNsJQ&t=4820s), served as a valuable reference point during the development of this project. As I continue to focus primarily on backend development, Hesam's expertise and teaching style greatly contributed to my success in this project on the front end.

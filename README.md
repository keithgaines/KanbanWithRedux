# Kanban Web App (Redux)

React-based task management application demonstrating predictable state management using Redux, component-driven UI design, and persistent client-side state.

Live: https://kanban-redux.vercel.app/  
Code: https://github.com/keithgaines/kanban_redux

---

## Overview

This project implements a Kanban-style task management system designed to explore scalable frontend state architecture using Redux.

Key focus areas:
- Centralized state management with Redux
- UI state synchronization across multiple board columns
- Persistent theme handling (dark mode)
- Component-driven architecture in React

---

## Features

- Drag-and-drop task management across columns
- Persistent dark mode with local storage
- Board and task state managed via Redux
- Modular component structure
- Responsive UI layout

---

## Technical Stack

- React
- Redux Toolkit
- JavaScript (ES6+)
- CSS / UI styling
- LocalStorage (theme persistence)

---

## State Management (Redux)

### Dispatching Actions

State updates are handled through Redux actions dispatched from UI components:

```javascript
dispatch(
  boardsSlice.actions.dragTask({
    colIndex,
    prevColIndex,
    taskIndex,
  })
);
```
Accessing Global State

Components subscribe to global state using useSelector:
```
const boards = useSelector((state) => state.boards);
```
This ensures UI remains consistent with application state without prop drilling.

## Dark Mode Implementation

Theme state is managed via a custom hook with persistence in local storage:
```javascript
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
```
---

## Component Design Notes

- Column and Task components are decoupled from global state logic  
- Redux slice handles board-level mutations  
- UI updates are derived from state rather than direct DOM manipulation  

---

## Key Engineering Decisions

- Chose Redux to manage cross-column drag-and-drop state complexity  
- Used local storage for lightweight persistence instead of backend dependency  
- Structured state to support future extension (multi-board scaling)  

---

## What This Project Demonstrates

- State architecture using Redux in real UI flows  
- Managing non-trivial UI interactions (drag-and-drop)  
- Separation of UI components and state logic  
- Persistence patterns in frontend applications  

---

## Attribution

This project was developed as part of a learning exercise focused on Redux and modern React state management patterns.

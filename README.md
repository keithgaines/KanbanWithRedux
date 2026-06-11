# Kanban Web App

Task management application built with React and Redux.

The project demonstrates frontend state management, drag-and-drop workflows, persistent UI preferences, and component-driven application structure.

**Live Application:** https://kanban-redux.vercel.app

**Repository:** https://github.com/keithgaines/kanban_redux

---

## Overview

This application provides a Kanban-style task board where users can manage tasks across multiple workflow columns.

The project focuses on predictable state management using Redux and demonstrates how frontend applications can manage complex UI interactions without relying on a backend service.

---

## Features

* Drag-and-drop task movement across columns
* Centralized board state using Redux
* Persistent dark mode using local storage
* Modular React component structure
* Responsive layout

---

## Tech Stack

* React
* Redux Toolkit
* JavaScript
* CSS
* LocalStorage

---

## State Management

Application state is centralized through Redux.

Board updates, task movement, and column changes are handled through dispatched actions rather than direct component-level mutation.

```javascript
dispatch(
  boardsSlice.actions.dragTask({
    colIndex,
    prevColIndex,
    taskIndex,
  })
);
```

Components read shared state using `useSelector`, keeping the UI synchronized with the Redux store.

```javascript
const boards = useSelector((state) => state.boards);
```

---

## Architecture Notes

* Redux manages board-level state and task movement
* Components remain focused on rendering and user interaction
* LocalStorage handles lightweight theme persistence
* State updates are driven through predictable actions
* Structure supports future extension into multi-board or backend-backed workflows

---

## What This Demonstrates

* Frontend state architecture
* Redux-based workflow management
* Drag-and-drop UI behavior
* Component separation
* Persistent client-side preferences

---

## Future Enhancements

* Backend persistence
* User authentication
* Multi-board support
* Task labels and priorities
* Due dates and assignment

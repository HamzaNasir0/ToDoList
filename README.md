This is a great, clean Todo List application\! Here's a well-structured **README.md** file for your project.

-----

# Todo List Application

A simple, modern, and responsive web application for managing your daily tasks. This project is built using vanilla HTML, CSS, and JavaScript.

## ✨ Features

  * **Add Tasks:** Easily add new tasks via the input field.
  * **Edit Tasks:** Modify existing task content directly in the list.
  * **Delete Tasks:** Remove completed or unwanted tasks.
  * **Input Validation:** Prevents adding empty tasks and duplicate tasks.
  * **Responsive Design:** Looks great on any screen size.
  * **Modern Styling:** A clean, vibrant, and user-friendly interface using **CSS Variables** for easy theme customization.

## 🛠 Technologies Used

  * **HTML5**
  * **CSS3** (with custom CSS variables)
  * **JavaScript** (Vanilla JS)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

You only need a modern web browser to run this application.

### Installation

1.  **Clone the repository** (assuming this code is in a Git repository):

    ```bash
    git clone [your-repository-url]
    cd todo-list-app
    ```

2.  **Locate the files:** The project consists of three main files:

      * `index.html` (The main structure)
      * `assets/style.css` (All the styling)
      * `assets/main.js` (The application logic)

3.  **Open in Browser:** Simply open the `index.html` file in your preferred web browser.

    ```bash
    # Example command (may vary by OS)
    open index.html
    ```

## 📝 Usage

1.  **Add a Task:** Type your task into the **"Add a new task..."** input field and click the **"Add Task"** button or press **`Enter`**.
2.  **Edit a Task:**
      * Click the **"Edit"** button next to a task.
      * The task text will become editable.
      * Make your changes and click the **"Save"** button to finalize the edit.
3.  **Delete a Task:** Click the **"Delete"** button next to the task you want to remove.

## 🎨 Customization (CSS Variables)

The application uses CSS variables for easy theming. You can quickly change the look by modifying the `:root` section in `assets/style.css`.

| Variable Name | Default Value | Description |
| :--- | :--- | :--- |
| `--primary` | `#7c3aed` (Violet) | Main accent color for buttons and headings. |
| `--danger` | `#ef4444` (Red) | Color for the delete button. |
| `--success` | `#22c55e` (Green) | Color for the save button. |
| `--warning` | `#f59e0b` (Amber) | Color for the edit button. |
| `--bg-gradient` | `linear-gradient(...)` | The background gradient for the `body`. |
| `--card-bg` | `#ffffff` (White) | The background color for the main container. |
| `--radius` | `14px` | Border radius for elements. |

## 💡 Code Structure Overview

### `index.html`

Provides the semantic HTML structure for the application, linking to the stylesheet and the JavaScript file.

### `assets/style.css`

Contains all the styling, using a modern design and CSS variables for a maintainable and customizable look.

### `assets/main.js`

Manages the application's core logic:

| Function | Description |
| :--- | :--- |
| `addTask()` | Handles input validation, checks for duplicates, and calls `createTaskElement`. |
| `createTaskElement(text)` | Creates the new `<li>` element with all the content, actions, and event listeners. |
| `deleteTask(event)` | Removes the task item from the list. |
| `toggleEditMode(event)` | Switches the task item to editable mode, hiding the **Edit** button and showing the **Save** button. |
| `saveTaskEdit(event)` | Saves the new task content, validates that the task isn't empty, and reverts the item back to view mode. |

-----

## 👨‍💻 Author

Hamza Nasir

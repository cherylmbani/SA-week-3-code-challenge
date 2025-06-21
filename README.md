# Blog Manager App

A simple blog post manager built using HTML, CSS, and JavaScript with a local `json-server` API.  
This project demonstrates core frontend skills including DOM manipulation, event handling, and working with APIs.

Created by **Cheryl Mbani** | 2025

---

## Description

This is a basic blog application that allows users to:

- View a list of blog post titles  
- Click a post to see its full details (title, content, author, image)  
- Add a new blog post via a form  
- Automatically show the first post on page load  

The project uses `json-server` to simulate a backend API and is designed for learning and practicing JavaScript skills.

---

## Features

- View all blog titles  
- Click on a title to display the full post  
- Add a new blog post (title, content, author)  
- Optional image rendering  
- JSON Server as a local API  
- Clean layout and styling  

---

## How to Use

### Requirements

- Node.js installed  
- Internet browser (e.g., Chrome)  
- A code editor (e.g., VS Code)  
- Terminal/Command Line access  

---

## Setup Instructions

1. **Create or clone the project folder**

   If you already have your folder, skip to step 2. Otherwise:

   ```bash
   git clone your-repo-url
   cd your-folder-name
   ```

2. **Inside the folder, ensure you have the following files:**

   - `index.html`  
   - `src/index.js`  
   - `css/styles.css`  
   - `db.json` with sample blog post data  

3. **Install JSON Server globally (only once):**

   ```bash
   npm install -g json-server
   ```

4. **Start the JSON Server using:**

   ```bash
   json-server db.json
   ```

   This will run your mock backend at:  
   `http://localhost:3000/posts`

5. **Open your `index.html` in the browser**  
   You can double-click it or use a tool like Live Server to preview it live.

---
## Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6)  
- JSON Server  

---



## License

This project is licensed for **educational and personal use** only.

You are free to:

- Use and modify the code  
- Share your own versions  
- Practice and learn from it  

You may **not** sell or distribute it commercially without permission.

Created with by **Cheryl Mbani** | © 2025

---

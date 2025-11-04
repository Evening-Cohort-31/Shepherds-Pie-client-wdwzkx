# 🧩 Setting Up React Bootstrap for Shepherd's Pies Project

These are the steps taken to add **React Bootstrap** as the CSS framework for our Shepherd’s Pies web app project.

---

## 🥇 1. Install React Bootstrap and Bootstrap

We’ll install both React Bootstrap (the component library) and Bootstrap (the core CSS styles it relies on).

Run this command in your project root directory:

```bash
npm install react-bootstrap bootstrap
```

---

## 🥈 2. Import Bootstrap’s CSS in `src/index.js`

React Bootstrap components depend on the core Bootstrap stylesheet. Import it once in your entry file (`src/index.js`):

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

✅ This ensures that all React Bootstrap components (buttons, cards, navbars, modals, etc.) will inherit Bootstrap’s default styling.

---

## 🥉 3. (Optional) Verify installation

You can quickly confirm everything’s working by importing a simple React Bootstrap component (e.g., a Button) into `App.jsx`:

```jsx
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <h1>Shepherd’s Pies</h1>
      <Button variant="primary">Test Button</Button>
    </div>
  );
}

export default App;
```

If you see a styled blue Bootstrap button appear when you start your app, you’re good to go!

Run your app to test:

```bash
npm run dev
```

---

## 🧠 4. Using Components

You can now use any React Bootstrap component in your project. Common imports include:

```jsx
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
```

View the full component docs here:  
👉 [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)

---

## 🧩 5. Optional: Customize Bootstrap Theme

If you want to customize colors, spacing, or typography, you can create a custom SCSS file or override Bootstrap variables. Example:

```scss
// src/custom.scss
$primary: #23635d; // custom brand color
@import 'bootstrap/scss/bootstrap';
```

Then import your custom SCSS file in `index.js` instead of the default CSS:

```js
import './custom.scss';
```

Make sure you have **Sass** installed if you go this route:

```bash
npm install sass
```

---

## ✅ Summary

**Installed:**  

- `react-bootstrap`  
- `bootstrap`  

**Configured:**  

- Added `bootstrap.min.css` import in `index.js`  
- Verified with a test component (`Button`)  
- Optional: Set up custom theme overrides

---

Now the Shepherd’s Pies team can use React Bootstrap components throughout the project with consistent styling and layout utilities.

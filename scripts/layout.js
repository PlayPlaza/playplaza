:root {
    --primary-color: RGB(255, 80, 80);
    --secondary-color: #849ad4;
    --font-color: #424242;
    --bg-color-a: #fff;
    --bg-color-b: #999;
    --heading-color: #292922;
    --nav-button: RGB(255, 80, 80);
    --nav-switch: #424242;
    --page-box-start: #b7b7ec;
    --page-box-end: #345ee7;
    --card-start: rgba(255, 255, 255, 0.7);
    --card-end: rgba(255, 255, 255, 0.3);
  }
  
  [data-theme="dark"] {
    --primary-color: RGB(255, 80, 80);
    --secondary-color: #818cab;
    --font-color: #e1e1ff;
    --bg-color-a: #161625;
    --bg-color-b: #414151;
    --heading-color: #818cab;
    --nav-button: RGB(255, 80, 80);
    --nav-switch: #fbfd5b;
    --page-box-start: #4e4e83;
    --page-box-end: #0f2777;
    --card-start: rgba(64, 64, 64, 0.7);
    --card-end: rgba(128, 128, 128, 0.3);
  }
  
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
  main {
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    background: linear-gradient(to right bottom, var(--bg-color-a), var(--bg-color-b));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--font-color);
    border:#fbfd5b;
    border-width: 1px;;
  }
  
  h1 {
      color: var(--secondary-color);
  }
  
  a {
      color: var(--primary-color);
  }
  
  .title-font {
    font-family: 'Charm', cursive;
  }
  
  nav {
    background: var(--bg-color-a);
  }
  
  nav ul {
    background: linear-gradient(
      to right bottom,
      rgba(255, 80, 80, 0.7),
      rgba(255, 0, 0, 0.3)
    );
    z-index: 2;
    backdrop-filter: blur(2rem);
    display: flex;
  }
  
  nav ul li {
    display: inline-block
  }
  
  nav ul li a {
    display: block;
    color: var(--font-color);
    text-align: center;
    padding: 15px 18px;
    text-decoration: none;
    font-family: sans-serif;
  }
  
  nav ul li a:hover {
    background-color: var(--nav-button);
  }
  
  nav ul li:last-of-type {
    text-align:right;
  }
  
  .theme-switch-wrapper {
    display: flex;
    color: var(--font-color);
    text-align: center;
    padding: 7px 7px;
  }
  
  .theme-switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
  }
  
  .theme-switch input {
    display:none;
  }
  
  .ion-button {
    background-color: rgba(255, 80, 80, 0);
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
  }
  
  .dark-mode-icon {
    color: var(--nav-switch);
  }
  
  .page-box {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    background: linear-gradient(to right bottom, var(--page-box-start), var(--page-box-end));
    min-height: 60vh;
    border-radius: 2rem;
    z-index: 2;
    backdrop-filter: blur(2rem);
  }
  
  .card {
    display: flex;
    background: linear-gradient(
      to left top,
      var(--card-start),
      var(--card-end)
    );
    border-radius: 1rem;
    margin: 3rem 0rem;
    padding: 3rem;
    box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 20em;
  }
  
  .card-image img {
    max-width: 200px;
    max-height: 100px;
    text-decoration: none;
  }
  
  .card-link a {
    color: var(--font-color);
    text-decoration: none;
  }
  
  .card-link a:visited {
    color: var(--font-color);
    text-decoration: none;
  }   
  
  .card-link a:hover {
    color: var(--secondary-color);
    text-decoration: none;
  }
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Timings() {
  const hour = new Date().getHours();
  const open = 9;
  const close = 23;
  const isOpen = (hour) => hour >= open && hour <= close;
  if (isOpen) {
    return ["open", hour];
  } else {
    return ["close", hour];
  }
}

function Header() {
  return (
    <header className="header">
      <h1>React Pizza.co</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}
function Footer() {
  const [St, hour] = Timings();
  return (
    <footer className="footer">
      time is-- {hour} So, This Store is now {St}
    </footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="pizza spinaci" />
      <h3>Pizza Spinaci</h3>
      <p> Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

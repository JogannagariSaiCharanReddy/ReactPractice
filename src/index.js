import React from "react";
import ReactDOM from "react-dom/client";
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>React Pizza.co</h1>;
}
function Menu() {
  return (
    <div>
      <h1>this is menu</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const open = 9;
  const close = 23;
  const isOpen = (hour) => hour >= open && hour <= close;
  console.log(isOpen);
  return (
    <p>
      time is
      {hour} hours so: This Store is now Open
    </p>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="pizza spinaci" />
      <h1>Pizza Spinaci</h1>
      <p> Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

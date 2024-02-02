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
      <Pizza
        Name="Pizza Spinaci"
        photo="pizzas/spinaci.jpg"
        ingrediens="Tomato, mozarella, spinach, and ricotta cheese"
        price={10}
      />
      <Pizza
        Name="Pizza Margherita"
        photo="pizzas/margherita.jpg"
        ingrediens="Tomato and mozarella"
        price={12}
      />
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

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photo} alt="pizza spinaci" />
      <div>
        <h3>{props.Name}</h3>
        <p> {props.ingrediens}</p>
        <h3>{props.price}$</h3>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

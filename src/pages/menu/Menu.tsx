import "./menu.css";

const Menu = () => {
  return (
    <section className="menu-section">
      <div className="menu-container">
        <div className="menu-item">
          <img src="./images/pizza.jpg" alt="pizza" />
          <h3>BBQ smoked pizza</h3>
          <p>
            Classic bbq sauced pan pizza filled with fresh sauce,mozerella and
            basil
          </p>
        </div>
        <div className="menu-item">
          <img src="./images/burger.jpg" alt="burger" />
          <h3>Classic Cheese Burger</h3>
          <p>
            Classic bbq sauced pan pizza filled with fresh sauce,mozerella and
            basil
          </p>
        </div>
        <div className="menu-item">
          <img src="./images/pasta.jpg" alt="pasta" />
          <h3>Alfredo garlic sauce pasta</h3>
          <p>
            Classic bbq sauced pan pizza filled with fresh sauce,mozerella and
            basil
          </p>
        </div>
        <div className="menu-item">
          <img src="./images/fried-chicken.jpg" alt="kfc" />
          <h3>Classic fried chicken</h3>
          <p>
            Classic bbq sauced pan pizza filled with fresh sauce,mozerella and
            basil
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;

import "./menu.css";
import MenuCard from "./MenuCard";

const myFood = [
  {
    title: "BBQ smoked pizza",
    desc: "Classic bbq sauced pan pizza filled with fresh sauce,mozerella and basil",
    image: "./images/pizza.jpg",
  },
  {
    title: "Classic Cheese Burger",
    desc: "   Classic bbq sauced pan pizza filled with fresh sauce,mozerella and basil",
    image: "./images/burger.jpg",
  },
  {
    title: "BBQ smoked pizza",
    desc: "Classic bbq sauced pan pizza filled with fresh sauce,mozerella and basil",
    image: "./images/pizza.jpg",
  },
  {
    title: "Classic Cheese Burger",
    desc: "   Classic bbq sauced pan pizza filled with fresh sauce,mozerella and basil",
    image: "./images/burger.jpg",
  },
  {
    title: "Classic Cheese Burger",
    desc: "   Classic bbq sauced pan pizza filled with fresh sauce,mozerella and basil",
    image: "./images/burger.jpg",
  },
];
const Menu = () => {
  return (
    <section className="menu-section">
      <div className="menu-container">
        {myFood.map((food, index) => {
          return (
            <div key={index}>
              <MenuCard
                title={food.title}
                desc={food.desc}
                image={food.image}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;

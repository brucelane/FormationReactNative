import React, { useState } from 'react';

import './App.css';

const Square = ({ init }) => {
  const [value, setValue] = useState(init);
  return (
    <button className="square" onClick={() => setValue('x')}>
      {value}
    </button>);
};

const Board = ({ squares }) => {

  const renderSquare = (i) => (<Square init={squares[i]} />);
  console.log(squares);
  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );

}

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={[
          'O', null, 'X',
          'X', 'X', 'O',
          'O', null, null,
        ]} />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
const ProductCategoryRow = ({ category }) => (
  <tr>
    <th colSpan="2">{category}</th>
  </tr>
)

const ProductRow = ({ product }) => (
  <tr>
    <td>{product.stocked ? (
      product.name
    ) : (
        <span style={{ color: "red" }}>{product.name}</span>
      )}</td>
    <td>{product.price}</td>
  </tr>
);

const ProductTable = ({ products }) => {
  let lastCategory = null;
  const rowsSorted = [...products];
  rowsSorted.sort((a, b) => {
    return a.category >= b.category ? 1 : -1;
  });
  const rows = [];

  rowsSorted.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}


const SearchBar = ({ inputValue, onInputChange }) => {
  return (
    <form>
      <input
        value={inputValue}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
        type="text"
        placeholder="Search..."
      />
      <p>
        <input type="checkbox" /> Only show products in stock
        </p>
    </form>
  );
}


const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = React.useState("");
  const filteredProductsList = products.filter((product) =>
    product.name.includes(filterText)
  );
  return (
    <div>
      <SearchBar
        inputValue={filterText}
        onInputChange={(value) => {
          setFilterText(value);
        }}
      />
      <ProductTable products={filteredProductsList} />
    </div>
  );
};
// =======================================
const Produits = () => {
  const PRODUCTS = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football"
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball"
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch"
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball"
    },

    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5"
    },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
  ];

  return (
    <div className="game">
      <div className="game-board">
        <FilterableProductTable products={PRODUCTS} />
      </div>

    </div>
  );
}
function App() {
  return (
    <>
      <Game />
      <Produits />
    </>
  );
}

export default App;

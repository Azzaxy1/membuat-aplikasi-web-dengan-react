/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import { createRoot } from "react-dom/client";

// Pakai functional compoenent karena tidak menggunakan state
const CounterDisplay = ({ count }) => {
  if (count === 0) {
    return <p>{count}</p>;
  }

  if (count % 5 === 0 && count % 7 === 0) {
    return <p>FizzBuzz</p>;
  }

  if (count % 5 === 0) {
    return <p>Fizz</p>;
  }

  if (count % 7 === 0) {
    return <p>Buzz</p>;
  }

  return <p>{count}</p>;
};

// props increase a/ event Handler yang akan dipanggil saat event
const IncreaseButton = ({ increase }) => {
  return (
    <div>
      <button onClick={increase}>+ Increase</button>
    </div>
  );
};

const ResetButton = ({ reset }) => {
  return (
    <div>
      <button onClick={reset}>- Reset</button>
    </div>
  );
};

class CounterApp extends React.Component {
  // Untuk menginisialisasi data
  constructor(props) {
    super(props);

    // inisialisasi nilai count di dalam state
    this.state = {
      count: 0,
    };

    // Binding event handler agar nilai this selalu bernilai CounterApp dimanapun fungsi dipanggil
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  onIncreaseEventHandler() {
    // untuk mengubah nilai state
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  }

  onResetEventHandler() {
    // untuk mengubah nilai state
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <IncreaseButton increase={this.onIncreaseEventHandler} />
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<CounterApp />);


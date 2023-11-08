// import { useState } from 'react';

import Card from "./components/card";

function App() {
  // const [count, setCount] = useState(0);
  // const [Data, setData] = useState({});
  // const [inputText, setInputText] = useState('');

  // const clickIncrease = () => {
  //   setCount((prev) => prev + 1);
  // };

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch('http://localhost:5000/api/user/fetch', {
  //       method: 'GET',
  //     });
  //     if (!res.ok) {
  //       throw new Error('Request failed');
  //     }
  //     const temp = await res.json();
  //     setData(temp.data);
  //     console.log(temp.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const eventHandler = () => {
  //   console.log('a');
  // };

  // const data = [{ name: 'Arjun', roll: 7 }, { name: 'Jerin', roll: 8 }];

  return (
    <>
    <Card/>
      {/* <div className="btn-area">
        <button className="count-btn" onClick={clickIncrease}>
          count
        </button>
        <p>{count}</p>
      </div>
      {data?.map((item, index) => (
        <div key={index}>
          <h2 onClick={eventHandler}>
            {item.name} - {item.roll}
          </h2>
        </div>
      ))}
      <div>
        <form onSubmit={submitHandler}>
          <label>Enter Something</label>
          <input
            type="text"
            placeholder="write something"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
      <div>
        {Data.name ? (
          <h1>{Data.name}</h1>
        ) : (
          <p>No name data available</p>
        )}
      </div> */}

    </>
  );
}

export default App;

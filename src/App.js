import './App.css';
import styled from 'styled-components';

const burgersByMonth = {
  january: 5,
  february: 13,
  march: 4,
  april: 5,
  may: 10,
  june: 14,
  july: 5,
  august: 7,
  september: 8,
  october: 7,
  november: 6,
  december: 2
};


let arr = Object.values(burgersByMonth);
let max = Math.max(...arr);

const BarChartContainer = styled.div`
  width: 100%;
  height: 67vh;
`;

const YValues = styled.div`
  height: 100%;
`;


function App() {
  return (
    <div className="App">
      <h1>🍔🍔🍔 Hamburgers Eaten per Month 🍔🍔🍔</h1>
      <BarChartContainer>
        <YValues>

        </YValues>
        {Object.entries(burgersByMonth).map(item => console.log(item))}
      </BarChartContainer>
    </div>
  );
}

export default App;

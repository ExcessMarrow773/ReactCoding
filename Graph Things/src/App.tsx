import { BarChart } from '@mui/x-charts/BarChart';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <BarChart
          height={300}
           xAxis={[{
              id: 'barCategories',
              data: ['bar A', 'bar B', 'bar D'],
            }]}
          series={[{
              data: [50, 69, 42],
            }]}
        />
      </div>
    </>
  )
}

export default App

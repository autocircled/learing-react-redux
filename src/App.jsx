import CounterPage from './pages/CounterPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoPage from './pages/TodoPage'

const App = () => {
  return (
    <>
      {/* <CounterPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CounterPage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

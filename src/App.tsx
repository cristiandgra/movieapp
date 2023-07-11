import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Navbar from './components/Navbar'
import SearchPage from './pages/SearchPage'
import MyListPage from './pages/MyListPage'
import MovieDetailPage from './pages/MovieDetailPage'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route path='/mylist' element={<MyListPage />} />
        <Route path='/movie/:id' element={<MovieDetailPage />} />
      </Routes>
    </Provider>
  )
}

export default App

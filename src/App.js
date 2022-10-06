import { Route, Routes, Link, useLocation, json } from 'react-router-dom'
import Home from './pages/Home'
import BookList from './pages/BookList'
import Book from './pages/Book'
import NewBook from './pages/NewBook'
import NotFound from './pages/NotFound'
import BookLayout from './BookLayout'

function App() {
  const location = useLocation()

  return (
    <>
      <Routes location={'/books'} >
        <Route path='/books' element={<h1>Extra Content</h1>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to='/' state="hi">Home</Link>
          </li>
          <li>
            <Link to='/books'>Books</Link>
          </li>
        </ul>
      </nav>
      {location.state}
      {JSON.stringify(location)}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<NewBook />} />
          <Route path='/books/newBook' element={<NewBook />} />
        </Route>

        {/* <Route path='/books/:id' element={<Book />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

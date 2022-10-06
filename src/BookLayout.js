import React from 'react'
import { Link, NavLink, Outlet, useSearchParams } from 'react-router-dom'

export default function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 })
  const number = searchParams.get('n')
  return (
    <>
      {/* If the end prop is used, it will ensure this component isn't matched as "active" when its descendant paths are matched.
       */}
      <NavLink
        end
        style={({ isActive }) => {
          return isActive ? { color: 'red' } : { color: 'green' }
        }}
        to='/books/1'>
        Book 1
      </NavLink>
      <Link to='/books/2'>Book 2</Link>
      <Link to='/books/new'>New Book</Link>
      <br />
      <Link to={`/books/${number}`}>Book {number}</Link>
      <Outlet context={{ hello: 'world' }} />
      <input
        type='number'
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
export default function BookList() {
  return (
    <>
      <div>BookList</div>
      <Link to='/books/1'>Book 1</Link>
      <br />
      <Link to='/books/2'>Book 2</Link>
      <br />
      <Link to='/books/new'>New Book</Link>
    </>
  )
}

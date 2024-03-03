import { async } from '@firebase/util';
import React,{useEffect, useState} from 'react'
import { Navbar,Container, Alert } from 'react-bootstrap'
import AddBook from './AddBook';
import BookList from './BookList';
import './booksCommon.scss';
import {addBook, getAllBooks, getBook}  from './BookServices';
import ReactGA from 'react-ga';

// better to use useContext and custom hook to manage state variables or functions easily.

const BooksCommon = () => {
    // const [status,setStatus] = useState(available?"Available":"Not Available")
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const [quantity,setQuantity]=useState("")
    const [available,setAvailable]=useState(true)
    const [status,setStatus] = useState("Available")

    const [err,setErr]=useState({error:false,msg:""})
    const [bookId,setBookId]=useState("")
    const [books,setBooks]=useState()
    // const [book,setBook]=useState()

    const editHandler=async(id)=>{
        console.log("common bookId",id)
       
            try{
                const response =await getBook(id)
                console.log("response.data()",response.data())
                // setBook(response.data())
                setBookId(id)
                setTitle(response.data().title)
                setAuthor(response.data().author)
                setQuantity(response.data().quantity)
            }catch(err){
                setErr({error:true,msg:err.message})
            }
        
        
        // await updateBook(id,updatedBook)
        // AllBooks()
    }
    const AllBooks=async()=>{
        const res = await getAllBooks()
        console.log("res.docs",res.docs)
        setBooks(res.docs.map((doc)=>({...doc.data(),id:doc.id})))
        
        console.log("books",books)
    }

    useEffect(()=>{
        ReactGA.pageview(window.location.pathname)
    },[])

    return(
        <div>
            <AddBook  setTitle={setTitle} setAuthor={setAuthor} title={title} author={author} err={err} setErr={setErr} bookId={bookId} editHandler={editHandler} setBookId={setBookId} AllBooks={AllBooks} books={books} setQuantity={setQuantity} quantity={quantity} available={available} setAvailable={setAvailable} status={status} setStatus={setStatus}/>
            <div className='books-table-wrapper'> <BookList setTitle={setTitle} setAuthor={setAuthor} editHandler={editHandler} bookId={bookId} AllBooks={AllBooks} setBookId={setBookId} books={books} available={available} setAvailable={setAvailable} status={status} setStatus={setStatus}  title={title}  setQuantity={setQuantity}  author={author}  quantity={quantity}  setErr={setErr}/></div>
        </div>
    )
    
  
}

export default BooksCommon
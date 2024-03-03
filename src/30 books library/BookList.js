import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { deleteBook, getAllBooks, getBook, updateBook } from './BookServices'
import './booksCommon.scss';

const BookList = ({setTitle,setAuthor,updatedBook,editHandler,bookId,AllBooks,books,setBookId,status,title,setQuantity,author,quantity,setErr}) => {

    console.log("bool List bookId",bookId)
    const [term,setTerm]=useState("")
   

    useEffect(()=>{
        AllBooks()
    },[])

   

    const deleteHandler=async(id)=>{
        await deleteBook(id)
        AllBooks()
    }

    const decrement=async(id,title,author,status,quantity)=>{
        try{
            // const response = await getBook(id)
            // setBookId(id)
            // setTitle(response.data().title)
            // setAuthor(response.data().author)
            // setQuantity(response.data().quantity-1)
            const editedBook ={
                title,
                author,
                status,
                quantity:parseInt(quantity,10)-1
            }
            await updateBook(id,editedBook)
            await AllBooks()
           
        }catch(err){
            setErr({error:true,msg:err.message})
        }
    }

    const increment=async(id,title,author,status,quantity)=>{
        try{
            // const response = await getBook(id)
            // setBookId(id)
            // setTitle(response.data().title)
            // setAuthor(response.data().author)
            // setQuantity(response.data().quantity+1)
            const editedBook ={
                title,
                author,
                status,
                quantity:parseInt(quantity,10)+1
            }
            await updateBook(id,editedBook)
            await AllBooks()

            
        }catch(err){
            setErr({error:true,msg:err.message})
        }

    }

    const handleQuantity = async(val,id,title,author,status)=>{
        

        const editedBook ={
            title,
            author,
            status,
            quantity:val
        }
        await updateBook(id,editedBook)
        await AllBooks()

    }

    

  return (
    <div>
        <div className='refresh-btn'>
        <Button  variant='dark edit' onClick={()=>AllBooks()}>Refresh List</Button>


        </div>

        <div className='search'>
            <span> <i className='fa fa-search'></i></span>            
                <span><input  value={term} type="text" placeholder='Search with book title' onChange={(e)=>setTerm(e.target.value)}/></span>
            </div>


        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Status</th>
                    <th>Quantities</th>
                    <th>Action</th>
                    


                </tr>

            </thead>
            <tbody>

                {books && books.filter(book=> book.title.toLowerCase().includes(term.toLowerCase())).map((book,index)=>{
                    return(

                        <tr key={index}>
                    <td>{index+1}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    
                    <td>{book.status}</td>
                    <td className='minus-plus-btn'><Button variant="secondary" onClick={()=>decrement(book.id,book.title,book.author,book.status,book.quantity)}>-</Button><input value={book.quantity} type="number" min={0} onChange={(e)=>handleQuantity(e.target.value,book.id,book.title,book.author,book.status)}/><Button variant="secondary" onClick={()=>increment(book.id,book.title,book.author,book.status,book.quantity)}>+</Button></td>
                    <td className='buttons-col'>
                        <Button variant='secondary' className='edit' onClick={()=>editHandler(book.id)} >Edit</Button>
                        <Button variant='danger' className='delete' onClick={()=>deleteHandler(book.id)}>Delete</Button>

                    </td>
                </tr>

                    )
                })}



                

            </tbody>

            

            
        </Table>

        <pre>{JSON.stringify(books,undefined,2)}</pre>

    </div>
  )
}

export default BookList
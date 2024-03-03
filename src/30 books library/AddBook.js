import React,{useState} from 'react'
import { Navbar,Container, Alert } from 'react-bootstrap'
import './booksCommon.scss';
import {addBook, getAllBooks, getBook,updateBook}  from './BookServices';
import './booksCommon.scss';
import ReactGA from 'react-ga';

const AddBook = ({setTitle,setAuthor,err,setErr,title,author,bookId,editHandler,setBookId,AllBooks,setQuantity,quantity,available,setAvailable,status,setStatus}) => {
   

    const submitHandler=async()=>{
        ReactGA.event({
            category:title,
            action: author
        })




        // e.preventDefault()
        if(title==="" || author==="" || quantity===""){
            setErr({error:true,msg:"All fields are mandetory"})
            return
        }else if(bookId===""){
            const res = await getAllBooks()
            console.log("res.docs",res.docs)
            const result = res.docs.find((doc)=>{
                return doc.data().title===title && doc.data().author===author
            })
            if(result){
                setErr({error:true,msg:"Book is already present in library"})
                return
            }

            console.log("result",result)

        }

    

        const newBook ={
            title,
            author,
            status,
            quantity
        }

        console.log("add book bookId",bookId)

        try{
            if(bookId===undefined || bookId===""){

                console.log("newBook",newBook)
                await addBook(newBook);
                setErr({error:false,msg:"Book was added to library!!"})
                console.log("err",err)
                AllBooks()
            }else{
                await updateBook(bookId,newBook)
                setErr({error:false,msg:"Updated the existing book!!"})
                setBookId("")
                AllBooks()
            }
        }catch(e){
            setErr({error:true,msg:e.message})

        }
        setTitle("")
        setAuthor("")
        setQuantity("")


    }

    const availableHandler=(b)=>{
        setAvailable(b)
        setStatus(b? "Available":"Not Available")

    }
  return (
    <div className='books-wrapper'>
        

        <header>Library - Firebase CRUD</header>
        {/* <form onSubmit={submitHandler}> */}
        {err.msg!=="" && 
        <div  style={{"marginTop":"30px"}} className='error-msg'>
        <div className='x-mark' onClick={()=>setErr({error:false,msg:""})}>x</div>
        <div className='alert-msg'>{err?.msg && <Alert variant={err?.error ? "danger" :"success"}  onClose={()=>setErr("")}  dismissible>{err.msg}</Alert>}</div>
   </div>}



        <section>

            <div>
                <span>B</span>
                <span><input value={title} type="text"  placeholder='Book Title' onChange={(e)=>setTitle(e.target.value)}/></span>
            </div>
            <div>
                <span>A</span>
                <span><input value={author} type="text" placeholder='Book Author' onChange={(e)=>setAuthor(e.target.value)}/></span>
            </div>
            <div>
                <span>Q</span>
                <span><input value={quantity} type="number"  min={0} placeholder='Book Quantities' onChange={(e)=>setQuantity(parseInt(e.target.value, 10))}/></span>
            </div>

            <div>
                <button className={available? "dark-green":"light-green"} onClick={()=>availableHandler(true)}>Available</button>
                <button className={available? "light-tomoto":"dark-tomoto"} onClick={()=>availableHandler(false)}>Not Available</button>
            </div>
           <div>
                <button className='ui button blue' onClick={()=>submitHandler()}>Add/Update</button>
           </div>
        </section>
        {/* </form> */}
    </div>
  )
}

export default AddBook
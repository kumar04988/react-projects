import React from 'react'
import { db } from './firebase-crud'
import {
    collection,
    getDocs,
    addDoc,
    getDoc,
    updateDoc,
    deleteDoc,
    doc //It is used to check document is available or not

} from "firebase/firestore"

const collectionReference = collection(db,"books");

export const addBook = (newBook) => {
    console.log("came up to here")
  return addDoc(collectionReference,newBook)
}

export const getAllBooks =()=>{
    return getDocs(collectionReference)
}

export const getBook =(id)=>{
    const bookDoc = doc(db,"books",id)
    return getDoc(bookDoc)
}

export const updateBook =(id,updatedBook)=>{
    const bookDoc = doc(db,"books",id)
    return updateDoc(bookDoc,updatedBook)
}

export const deleteBook = (id)=>{
    const bookDoc = doc(db,"books",id)
    return deleteDoc(bookDoc)
}

// export default{
//     AddBook,

// }
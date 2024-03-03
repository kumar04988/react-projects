import logo from './logo.svg';
import './App.css';
import Navbar from './owlNavbar/Navbar';
import NormalValidForm from './react-normal-form-validation 21/NormalValidForm';
import UseForm from './react-hook-form/UseForm'
import ContactCommon from './contactManager1/Common';
import NavbarCommon from './VpnLabsNavbar/NavbarCommon';
import Booking from './Redux shop/Redux1/Booking';
import CommonSite from './Redux shop/Redux2/container/CommonSite';
import CommonProtectedRoutePage from './protectedRoute/CommonProtectedRoutePage';
import HooksPage from './react_hooks/HooksPage';
import HeaderContextCustomHook16 from './useContext Api 16/HeaderContextCustomHook16';
import CommonContext from './useContext Api 16/CommonContext';
import MovieApp from './Redux Movie app 17/MovieApp';
import HOC from './Higher order components 20/HOC';
import SearchTodo from './Higher order components 20/SearchTodo';
import SearchUsers from './Higher order components 20/SearchUsers';
import searchUsers from './Higher order components 20/SearchUsers';
import Users from './Higher order components 20/SearchUsers';
import Todo from './Higher order components 20/SearchTodo';
import './Higher order components 20/HOC.scss';
import News from './custom hook useFetch 22/News';
import Toggle from './Pure components 23/Toggle';
import FormCommon from './27 react firebase authentication/Common';
import BooksCommon from './30 books library/BooksCommon';
import Date from './date picker/Date';
import Testing from './36 react testing library/Testing';
import CommonPortfolio from './37 react portfolio project/CommonPortfolio';
import LazyCommon from './40 imrove performance with lazy loading/LazyCommon';
import RpaStatusAnimation from '../src/NewProjects/RPA/RpaStatusAnimation'
import Images from './50 own projects/movable images/Images'

import ReactGA from "react-ga";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MovieRoutes from './50 own projects/own movie app/MovieRoutes';
// import 'semantic-ui-css/semantic.min.css'

// const TRACKING_ID = "UA-263482784-2"
const TRACKING_ID = "G-9R770DMK4V"

ReactGA.initialize(TRACKING_ID);

const path = window.location.pathname

console.log("path", path)

function App() {
  return (
    <div>
      {/* <a href='/owlNavbar'> owl navbar</a><br/>
      <a href='/contactApp'> Contact app</a><br/>
      <a href='/vpnlabsNavbar'> vpn labs navbar</a><br/>
      <a href='/normalForm'> normal valid form</a><br/>
      <a href='/useForm'> use form</a><br/>
      <a href='/railwayBook'> railway booking</a><br/>
      <a href='/shoppingSite'> shopping-site</a><br/>
      <a href='/protectedSite'> protected-site</a><br/>
      <a href='/hooks'> hooks</a><br/>
      <a href='/HOC'> HOC</a><br/>
      <a href='/News'> News</a><br/>
      <a href='/Toggle'> Toggle</a><br/>
      <a href='/firebaseForm'>firebase-Form</a><br/>
      <a href='/library'> library</a><br/>
      <a href='/date'> date</a><br/>
      <a href='/Testing'> Testing</a><br/>
      <a href='/lazyCommon'> lazy-common</a><br/>
      <a href='/images'> images</a><br/>
      <a href='/movies'> movies</a><br/>
      


      {path=='/owlNavbar' &&  <Navbar/>}
      {path=='/contactApp' &&  <ContactCommon/>}
      {path=='/vpnlabsNavbar' &&  <NavbarCommon/>}
      {path=='/normalForm' &&  <NormalValidForm/>}
      {path=='/useForm' &&  <UseForm/>}
      {path=='/railwayBook' &&  <Booking/>}
      {path=='/shoppingSite' &&  <CommonSite/>}
      {path=='/protectedSite' &&  <CommonProtectedRoutePage/>}
      {path=='/hooks' &&  <HooksPage/>}
      {path=='/HOC' &&  <HOC/>}
      {path=='/News' &&  <News/>}
      {path=='/Toggle' &&  <Toggle/>}
      {path=='/firebaseForm' &&  <FormCommon/>}
      {path=='/library' &&  <BooksCommon/>}
      {path=='/date' &&  <Date/>}
      {path=='/Testing' &&  <Testing/>}
      {path=='/lazyCommon' &&  <LazyCommon/>}
      {path=='/images' &&  <Images/>}
      {path=='/movies' &&  <MovieApp/>} */}




      {/* <Router>
        <Routes>
          if(path=='/owlNavbar'){
            rerurn <Navbar/>
          }

          <Route path='/owlNavbar' element={<Navbar/>}/>
          <Route path='/contact-app' element={<ContactCommon/>}/>
          <Route path='/vpnlabs-navbar' element={<NavbarCommon/> }/>
          <Route path='/normal-form' element={<NormalValidForm/>}/>
          <Route path='/useForm' element={<UseForm/>}/>
          <Route path='/railway-book' element={<Booking/>}/>
          <Route path='/shopping-site' element={<CommonSite/> }/>
          <Route path='/protected-site' element={<CommonProtectedRoutePage/>}/>
          <Route path='/hooks' element={<HooksPage/>}/>
          <Route path='/useContext' element={<CommonContext/>}/>
          <Route path='/HOC' element={<HOC/>}/>
          <Route path='/search-users' element={<SearchUsers/>}/>
          <Route path='/News' element={<News/>}/>
          <Route path='/Toggle' element={<Toggle/>}/>
          <Route path='/firebase-Form' element={<FormCommon/>}/>
          <Route path='/library' element={<BooksCommon/>}/>
          <Route path='/date' element={<Date/> }/>
          <Route path='/Testing' element={<Testing/>}/>
          <Route path='/lazy-common' element={<LazyCommon/>}/>
          <Route path='/images' element={<Images/>}/>
          <Route path='/movies' element={<MovieApp/>}/>
        </Routes>
      </Router>
 */}








      {/* <Navbar/> */}
      {/* <ContactCommon/> */}
      {/* <NavbarCommon/> */}
      {/* <NormalValidForm/> */}
      {/* <UseForm/> */}
      {/* <Booking/> */}
      {/* <CommonSite/> */}
      {/* <CommonProtectedRoutePage/> */}
      {/* <HooksPage/> */}

      {/* <CommonContext/> */}
      {/* <MovieApp/> */}
      {/* <HOC/> */}
      {/* <SearchUsers/> */}

      {/* <div className='hoc'>
        <Users/>
        <Todo/>
      </div> */}

      {/* <News/> */}
      {/* <Toggle/> */}
      {/* <FormCommon/> */}
      <BooksCommon/>
      {/* <Date/> */}
      {/* <Testing/> */}
      {/* <CommonPortfolio/> */}
      {/* <LazyCommon/> */}
      {/* <RpaStatusAnimation/> */}

      {/* <Images/> */}
      {/* <MovieRoutes/> */}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import butter from './butter-client';
import { useEffect, useState } from 'react';
import Prismic from '@prismicio/client';
import {Data,Link,RichText} from 'prismic-reactjs';
import ReactMarkdown from 'react-markdown';
import FetchData from './fetch/fetchData';
import FetchThatData from './fetch/fetchData';
import useApi from './fetch/fetchData';
import easyFetch from 'cg-easyfetch';


function Footer() {

  const { data, error, isLoaded } = easyFetch(
    "http://localhost:1337/tests/1"
  )

  const obj2 = easyFetch(
    "http://localhost:1337/tests/1"
  )

  const obj1 = easyFetch(
    "http://localhost:1337/tests/1"
  )


  if (error !== null) {
    return <div>Error: {error.message}</div>
  }
  if (!isLoaded) {
    return <div>Loading...</div>
  }
  return (
    //<div>{data.text}</div>
    <ReactMarkdown children={obj2.data.text + obj1.data.text} />
  )

}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;

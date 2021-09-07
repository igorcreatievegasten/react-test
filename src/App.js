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

function Footer() {
  //const apiEndpoint = 'https://creatievegasten.prismic.io/api/v2';
  //const accessToken = 'MC5ZVGRjVHhFQUFDMEFITHVs.77-9GAzvv71XTmbvv70FNUvvv71F77-977-9Gu-_ve-_ve-_vTnvv70_77-977-977-977-977-9JVPvv70Geg';
  //const [data, setData] = useState(null);
  //const [doc, setDocData] = useState(null);

  //const Client = Prismic.client(apiEndpoint, {accessToken})

  const { data, error, isLoaded } = useApi(
    "http://localhost:1337/tests/1"
  )

  //strapi
  // useEffect(() => {
  //   fetch('http://localhost:1337/tests/1')
  //     .then((response) => response.json())
  //     .then(setData);
  // },[])


  if (error !== null) {
    return <div>Error: {error.message}</div>
  }
  if (!isLoaded) {
    return <div>Loading...</div>
  }
  return (
    //<div>{data.text}</div>
    <ReactMarkdown children={data.text} />
  )


  if(data) {
    //return <div>{JSON.stringify(data)}</div>
    //return <div>{data.text}</div>
    //return <div dangerouslySetInnerHTML={{ __html: data.data.data.fields.readme }} />
    //return <div dangerouslySetInnerHTML={{ __html: data.text }} />
    return <ReactMarkdown children={data.text} />
  }else{
    return <div>Not working</div>
  }


  //BUTTER ------------------------------
  // useEffect(() => {
  //   butter.page.retrieve('*', 'sample-page')
  //     .then(setData);

  // }, []);

  // if(data) {
  //   // return <div>{JSON.stringify(data)}</div>
  //   // return data.data.data.fields.readme
  //   return <div dangerouslySetInnerHTML={{ __html: data.data.data.fields.readme }} />
  // }else{
  //   return <div>Not working</div>
  // }


  //PRISMIC ------------------------------
  // useEffect(() => {
  //   const fetchData = async() => {
  //     const response = Client.query(
  //       Prismic.Predicates.at('document.type', 'test')
  //     )
  //     if (response) {
  //       console.log(response)
  //       setDocData(response[0])
  //     }
  //   }
  //   fetchData()
  // }, [])

  // return <div>{doc}</div>



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

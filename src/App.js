import React, { useState, useEffect } from 'react';
import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';
import { act } from '@testing-library/react';

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {

      const result =  await fetch(process.env.REACT_APP_API_URL).then((response) =>
        response.json()
      );
      
      act (()=>{
        setBlogPosts(result.slice(0,10));
        setLoading(false);
      })
    }
    fetchData();
  }, []);

  function handleAdd(value){
    act(()=>{
      setBlogPosts([...blogPosts,value]);
    });
  }
  return (
    <>
      <NewPost handleAdd={handleAdd}/>
      {loading ? <p>Loading...</p> : <BlogPosts blogPosts={blogPosts}/>} 
    </>
  );
}

export default App;

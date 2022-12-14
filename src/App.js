import React, { useState, useEffect } from 'react';
import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';
import { act } from '@testing-library/react';
import mockData from './MockData';

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const result = await mockData; // fetch(process.env.REACT_APP_API_URL).then((response) =>
      //   response.json()
      // );
      act (()=>{
        setBlogPosts(result.slice(0,10));
        setLoading(false);
      })
    }
    fetchData();
  }, []);
  return (
    <>
      <NewPost />
      {loading ? <p>Loading...</p> : <BlogPosts blogPosts={blogPosts}/>} 
    </>
  );
}

export default App;

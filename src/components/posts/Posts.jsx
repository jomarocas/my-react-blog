import Post from "../post/Post";
import "./posts.css";
import { useState, useEffect } from 'react'

export default function Posts() {
  const [blogs, sBlog] = useState([]);
  useEffect(() => {
    fetchData()
    async function fetchData() {
      try {
        let data = await fetch('https://dummyapi.io/data/v1/post?limit=5', {
          headers: {
            'app-id': '6260be9f96313cbf4b77fa38',
            'method': "GET",
          },
        });
        if (data.ok) {
          let response = await data.json()
          let dataPost = response.data
          sBlog(dataPost)
        }
      } catch (error) {
        console.log('Problem read:', error.message);
      }
    }

  }, []);
  return (
    <div className="posts">
      {blogs.length ? (
        <>
          {blogs.map((blog) => (
            <>
              <Post message={[blog.image, blog.text, blog.id, blog.tags]} />
            </>
          ))}
        </>
      ) : (
        <div className="error">Loading</div>
      )}
    </div>
  );
}

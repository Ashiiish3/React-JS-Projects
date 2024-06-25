import React, { useEffect, useState } from "react";
import Post from "./Post";

function PostList() {
    const [allData, setallData]= useState([])
  useEffect(() => {
    const getData = () => {
      fetch("http://localhost:3000/posts")
        .then((res) => res.json())
        .then((postData) => setallData(postData))
        .catch((err) => console.log(err));
    };
    getData();
  }, []);
  return( <div>
    {allData.map((post, index)=><Post key={index} title={post.title} body={post.body} />)}
  </div>);
}
export default PostList;
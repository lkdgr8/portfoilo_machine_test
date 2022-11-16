import React, { useEffect, useState } from 'react'
import ShowPopup from './ShowPopup'
// import ShowPopup from './ShowPopup';

function Blogs() {
  const [open, setOpen] = useState(false)
  const [blogData, setBlogData] = useState([])
  const [blogContent, setBlogContent] = useState([])

  const getBlog = async () =>{
    try{
    let url = `https://jsonplaceholder.typicode.com/posts`
    let res = await fetch(url);
    let data = await res.json();
    setBlogData(data)
    } catch (error) {
    console.log(error);
 }   
}


useEffect(() => {
        getBlog()
    }, []
);

  return (
    <>  
    <div id='blogs' className='myblogs'>
        <h1 className='text-center'>My Blogs</h1>   
        <div className='display-row'>
        {
            blogData.map((all) => {
                return (
                    <>
                    <div className='box'  onClick={() => {setBlogContent(all); setOpen(true)}}>
                        <h1>{all.title}</h1>
                    </div>
                    </>
                )}
                )   
        }
        </div> 
    </div>
    {open && 
        <ShowPopup blogContent={blogContent} setOpen={setOpen}/>
    }
    </>
  )
}

export default Blogs
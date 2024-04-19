'use server'

import { getAllPosts, createNewPost } from '../lib/mysqldb';
import { Button } from "@/components/ui/button"
import { IoBeerSharp } from "react-icons/io5";


import { Input } from "@/components/ui/input"

import PostsList from './components/posts-list';
import PostForm from './components/post-form';



export default async function MySqlCrud() {
    
  const result = await getAllPosts()
  // console.log('yolo');


  
  
  
  

  return (
    <main className="container">
        <div>MySqlCrud</div>

        <section>
          {/* add click fuctionality for individual view */}
          {/* add delete functionality */}
          <h1>GET - Active Listing</h1>
          <Button className="bg-zinc-900 hover:bg-zinc-600
            transition text-white rounded py-2 px-3"
            >
            <IoBeerSharp className="mr-2 h-4 w-4" /> GET Posts
          </Button>
          <PostsList posts={result} />
          <div>
            
            {/* {JSON.stringify(result)} */}
            {/* { 
              result?.map((post: any)=> (
                <div key={post.id}> {post.post} </div>
              )) 
            } */}
          </div>
        </section>

        <section>
          <h1>Post - Create Post</h1>
          <div>
            <PostForm />
          </div>
        </section>

        <section>
          <h1>Update - Create Post</h1>
        </section>


    </main>
  )
}

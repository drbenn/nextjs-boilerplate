
'use client';
import { deletePostById } from "@/app/lib/mysqldb";
import { revalidatePath } from "next/cache";
import { FaRegTrashCan } from "react-icons/fa6";

export default function PostsList({ posts }: { posts: any[] } ) {

  const handleDelete = async (postId: number) => {
    
    try {
      console.log(postId);
      const response = await deletePostById(postId);    
      
      // rerenders route to update Posts and therefore Postslists

      // revalidatePath("/mysql-crud");

    } catch (error) {
      console.error('Error:', error);
    }
    

      // const response = await deletePostById(postId);    
      
      // // rerenders route to update Posts and therefore Postslists
      // revalidatePath("/mysql-crud");
  };
  return (
    <>
    <div>
    POSTINGS
    </div>
      <ul>
        {posts.map((post:any) => (
          <li key={post.id} className="p-8 text-left">
            {/* <h2 className="text-2xl font-semibold pb-3">{post.title}</h2> */}
            <div className="w-1/2 bg-red-300 flex flex-row justify-between">
            <p>{post.id}</p>
            <p>{post.post}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>

            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

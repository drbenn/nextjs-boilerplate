'use client';
import { deletePostById } from "@/app/lib/mysqldb";
import { FaRegTrashCan } from "react-icons/fa6";

export default function PostsList({ posts }: { posts: any[] } ) {

  const handleDelete = async (postId: number) => {
    try {
      const response = await deletePostById(postId);    
    } catch (error) {
      console.error('Error:', error);
    };
  };
  return (
    <>
    <div>
    POSTINGS
    </div>
      <ul>
        {posts.map((post:any) => (
          <li key={post.id} className="p-8 text-left">
            <div className="w-1/2 bg-red-300 flex flex-row justify-between">
              <p>{post.id}</p>
              <p>{post.post}</p>
              <button onClick={() => handleDelete(post.id)}>
                <FaRegTrashCan />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

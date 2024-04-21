

import { deletePostById } from "@/app/lib/mysqldb";
import { revalidatePath } from "next/cache";
import { FaRegTrashCan } from "react-icons/fa6";
// { posts }: { posts: any[] }
export default async function DeletePostButton( postId: any ) {
    // 'use server';
    const handleDelete = async () => {
        // "use server";
        // try {
          console.log(postId.postId);
          const response = await deletePostById(postId);    
          
          // rerenders route to update Posts and therefore Postslists
    
        //   revalidatePath("/mysql-crud");

      };
    
  return (
    <div onClick={handleDelete}>
    <FaRegTrashCan />
  </div>
  )
}

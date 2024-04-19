

import { createNewPost } from '../../lib/mysqldb';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { revalidatePath } from 'next/cache';
import { IoBeerSharp } from "react-icons/io5";

export default function PostForm() {

    const handlePost = async (formData: FormData) => {
        "use server"
        const submitData = {
            input1: formData.get("input1") as string,
            input2: formData.get("input2") as string,
        }
        const response = await createNewPost(submitData.input1);    
        console.log(response);

        // rerenders route to update Posts and therefore Postslists
        revalidatePath("/mysql-crud");
    };
  return (
    <>
        <form action={handlePost}>
          <Input
            name="input1"
            type="text"
            className="bg-white"
            // value={post}
            // onChange={(e) => setPost(e.target.value)}    
            />
            <Input
                name="input2"
                type="text"
                className="bg-white"
                // value={post}
                // onChange={(e) => setPost(e.target.value)}    
            />
          <Button className="bg-zinc-900 hover:bg-zinc-600
            transition text-white rounded py-2 px-3"
            type="submit"
            >
            <IoBeerSharp className="mr-2 h-4 w-4" /> Insert New Post
          </Button>
        </form>
    </>
  )
}
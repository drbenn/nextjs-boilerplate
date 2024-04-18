import executeQuery from './mysqldb';

export default async function MySqlCrud() {


  const result = await executeQuery("SELECT * FROM posts", [])

  return (
    <main className="container">
        <div>MySqlCrud</div>

        <section>
          {/* add click fuctionality for individual view */}
          {/* add delete functionality */}
          <h1>GET - Active Listing</h1>
          <div>
            {/* {JSON.stringify(result)} */}
            { 
              result?.map((post: any)=> (
                <div key={post.id}> {post.post} </div>
              )) 
            }
          </div>
        </section>

        <section>
          <h1>Post - Create Post</h1>
        </section>

        <section>
          <h1>Update - Create Post</h1>
        </section>


    </main>
  )
}

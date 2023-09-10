import React from "react";
import { useQuery } from "react-query";
type PropType = {
    name: string,
    age: number
}
interface Posts{
    userId: string,
    id: number,
    title: string,
    body: string
}
const fetchPost = async (): Promise<Posts[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
   
    if(!response.ok){
    throw new Error("failed fetch posts");
    }
    return response.json();
}

const Posts: React.FC = () =>{


const {isLoading, error, data, refetch } = useQuery<Posts [], Error>('Posts', fetchPost,{
    refetchOnWindowFocus: false
});
console.log(data);
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <div>Something went wrong</div>
    }
const handleClick = () =>{
    refetch();
}
    return (
        <>
        <button onClick={handleClick}>Refresh</button>
   {
    data?.map(post => (
        <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    ))
   }
    </>
    )
}

export default Posts;
import axios from "axios";

export default async function BlogPage({params}:any){
    const id = (await params).blogid;

    const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return <div>
        blog page {res.data.id}
        <h3>{res.data.title}</h3>
    </div>
}
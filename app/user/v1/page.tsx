import axios from "axios";



export  default async function v1() {

   const data=await axios.post("http://localhost:3000/backend",{name:"lakshman",location:"hyd,india"});
   
   console.log(data);

  return (
    <div className="bg-blue-500 h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">POST Request Successful!</h2>
        <p>Name: {data.data.data.name}</p>
        <p>Location: {data.data.data.location}</p>
     
      </div>
      <button>goto</button>
    </div>
  );
}

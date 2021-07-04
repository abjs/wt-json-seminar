import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div className="main">
      {users?.map((data, index) => {
        return (
          <div key={index}>
            <br />
            <p>{data.title}</p>
            <p>{data.completed ? 'Completed' : "Not Completed"}</p> 
          </div>
        );
      })}
    </div>
  );
}

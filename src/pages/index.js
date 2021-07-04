import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div className="main">
      {users.map((data, index) => {
        return (
          <div key={index}>
            <br/>
            <p>{data.name}</p>
            <p>{data.username}</p>
            <p>{data.email}</p>
            <p>{data.address.street}</p>
            <p>{data.address.suite}</p>
            <p>{data.address.city}</p>
            <p>{data.address.zipcode}</p>
          </div>
        );
      })}
    </div>
  );
}

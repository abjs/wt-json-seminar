import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [myDogImage, setMyDogImage] = useState(null);
  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      setMyDogImage(response.data.message);
      console.log(response.data.status);
    });
  }, []);
  return (
    <div className="Main">
      {myDogImage && <img src={myDogImage} alt="my dog image" />}
    </div>
  );
}

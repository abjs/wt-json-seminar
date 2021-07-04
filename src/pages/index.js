import axios from "axios";
export default function Home() {
  let Data = [];
  axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
    Data.push(response.data);
  });
  console.log(Data);
  return <div className="Main">

  </div>;
}

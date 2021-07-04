import axios from "axios";
export default function Home() {
  axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
    console.log(response.data);
  });
  return (
    <div className="Main">
      <h1>Hello World</h1>
    </div>
  );
}

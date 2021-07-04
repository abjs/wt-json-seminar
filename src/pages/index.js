import data from '../data.json'
export default function Home() {
  console.log(data);
  return (
    <div className="main">
      <h1>{data.Name}</h1>
    </div>
  );
}

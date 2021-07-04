import data from "../data.json";
export default function Home() {
  console.log(data);
  return (
    <div className="main">
      <h1>{data.Name}</h1>
      <p>{data.Address.District}</p>
      <p>{data.Address.House}</p>
      <p>{data.Address.code}</p>
      <br />
      {data.Technology.map((techs) =><p>{techs}</p>)}
    </div>
  );
}

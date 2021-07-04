export default function Home() {
  const data = {
    Name: "Abin Joseph",
    age: 21,
    Address: {
      House: "Kalathilparambil (H)",
      District: "idukki",
      place: "Josegiri",
      code: 685565,
    },
    Technology: [
      "ReactJS",
      "NextJS",
      "Angular12",
      "Firebase",
      "NodeJS",
      "ExpressJS",
      "serverless",
    ],
    Data: null,
  };
  console.log(data);
  return (
    <div className="main">
      <h1>{data.Name}</h1>
      <p>{data.Address.District}</p>
      <p>{data.Address.House}</p>
      <p>{data.Address.code}</p>
      <br />
      <p>{data.Technology[0]}</p>
      <p>{data.Technology[1]}</p>
      <p>{data.Technology[2]}</p>
      <p>{data.Technology[3]}</p>
      <p>{data.Technology[4]}</p>
      <p>{data.Technology[5]}</p>
      <p>{data.Technology[6]}</p>
    </div>
  );
}

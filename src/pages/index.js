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
    </div>
  );
}

export default function handler(req, res) {
  const data = {
    Name: "Abin Joseph",
    age: 21,
    Address: {
      "House name": "Kalathilparambil (H)",
      District: "idukki",
      place: "Josegiri",
      "pin code": 685565,
    },
    Technology: [
      "ReactJS",
      "NextJS",
      "Angular12",
      "Firebase",
      "NodeJS",
      "ExpressJS",
      "serverless",
      "etc..",
    ],
    Data: null,
  };
  res.status(200).json(data);
}

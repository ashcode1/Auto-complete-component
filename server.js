import express from "express";
import cors from "cors";

export const mockData = [
  { id: 1, name: "Australia" },
  { id: 2, name: "Brazil" },
  { id: 3, name: "Canada" },
  { id: 4, name: "Denmark" },
  { id: 5, name: "Egypt" },
  { id: 6, name: "France" },
  { id: 7, name: "Germany" },
  { id: 8, name: "Hungary" },
  { id: 9, name: "India" },
  { id: 10, name: "Japan" },
  { id: 11, name: "Kenya" },
  { id: 12, name: "Luxembourg" },
  { id: 13, name: "Mexico" },
  { id: 14, name: "Norway" },
  { id: 15, name: "Oman" },
  { id: 16, name: "Portugal" },
  { id: 17, name: "Qatar" },
  { id: 18, name: "Russia" },
  { id: 19, name: "Spain" },
  { id: 20, name: "Thailand" },
  { id: 21, name: "Uganda" },
  { id: 22, name: "Vietnam" },
  { id: 23, name: "Wales" },
  { id: 24, name: "Yemen" },
  { id: 25, name: "Zimbabwe" },
];

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/api/search", (req, res) => {
  const { query } = req.query;

  const filteredData = mockData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  setTimeout(() => {
    res.json(filteredData);
  }, 500);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

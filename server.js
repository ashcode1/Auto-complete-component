import express from "express";
import cors from "cors";

export const mockData = [
  { id: 1, name: "Australia", flag: "🇦🇺" },
  { id: 2, name: "Brazil", flag: "🇧🇷" },
  { id: 3, name: "Canada", flag: "🇨🇦" },
  { id: 4, name: "Denmark", flag: "🇩🇰" },
  { id: 5, name: "Egypt", flag: "🇪🇬" },
  { id: 6, name: "France", flag: "🇫🇷" },
  { id: 7, name: "Germany", flag: "🇩🇪" },
  { id: 8, name: "Hungary", flag: "🇭🇺" },
  { id: 9, name: "India", flag: "🇮🇳" },
  { id: 10, name: "Japan", flag: "🇯🇵" },
  { id: 11, name: "Kenya", flag: "🇰🇪" },
  { id: 12, name: "Luxembourg", flag: "🇱🇺" },
  { id: 13, name: "Mexico", flag: "🇲🇽" },
  { id: 14, name: "Norway", flag: "🇳🇴" },
  { id: 15, name: "Oman", flag: "🇴🇲" },
  { id: 16, name: "Portugal", flag: "🇵🇹" },
  { id: 17, name: "Qatar", flag: "🇶🇦" },
  { id: 18, name: "Russia", flag: "🇷🇺" },
  { id: 19, name: "Spain", flag: "🇪🇸" },
  { id: 20, name: "Thailand", flag: "🇹🇭" },
  { id: 21, name: "Uganda", flag: "🇺🇬" },
  { id: 22, name: "Vietnam", flag: "🇻🇳" },
  { id: 23, name: "Wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿" },
  { id: 24, name: "Yemen", flag: "🇾🇪" },
  { id: 25, name: "Zimbabwe", flag: "🇿🇼" },
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

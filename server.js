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

function isSimilar(a, b) {
  let similarity = 0;

  for (let i = 0; i < b.length; i++) {
    if (a.toLowerCase().includes(b[i].toLowerCase())) {
      similarity++;
    }
  }

  let threshold = 0.1;
  if (b.length === 1) {
    threshold = 0.05;
  }

  return similarity / b.length > threshold;
}

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/api/search", (req, res) => {
  const { query } = req.query;

  let filteredData = mockData
    .map((item) => {
      // Calculate similarity score for each item
      let score = 0;
      const itemNameLower = item.name.toLowerCase();
      const queryLower = query.toLowerCase();

      if (itemNameLower === queryLower) {
        score = 1; // Highest score for direct match
      } else if (itemNameLower.startsWith(queryLower)) {
        score = 0.9; // High score for prefix match
      } else if (itemNameLower.includes(queryLower)) {
        score = 0.8; // Lower score for substring match
      } else {
        const similarity = isSimilar(itemNameLower, queryLower);
        score = similarity ? 0.5 : 0;
      }

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  setTimeout(() => {
    res.json(filteredData);
  }, 500);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

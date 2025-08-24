const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL连接配置
const pool = new Pool({
  user: "postgres", // 替换为你的数据库用户名
  host: "localhost",
  database: "teamdb",
  password: "250817", // 替换为你的数据库密码
  port: 5432,
});

// 新增文章
app.post("/api/articles", async (req, res) => {
  const { title, members, content } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  try {
    const result = await pool.query(
      "INSERT INTO articles (title, members, content) VALUES ($1, $2, $3) RETURNING *",
      [title, members, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 获取所有文章
app.get("/api/articles", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM articles ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 启动服务
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME
});

exports.getTopics = async (req, res, next) => {
  try {
    let topics = await pool.query("SELECT * FROM topics");
    res.json({ success: true, data: topics });
  } catch (err) {
    next(err);
  }
};

exports.createTopic = (req, res, next) => {
  const {title, description, startdate, inprogress} = req.body;
  pool.query("INSERT INTO topics (title, description, startdate, inprogress) VALUES ($1, $2, $3, $4)", [title, description, startdate, inprogress])
    .then(res.status(201).json({ success: true, data: [] }))
    .catch(err => next(err))
};

exports.updateTopic = (req, res, next) => {
  const {title, description, startdate, inprogress} = req.body;
  pool.query("UPDATE topics SET title=$1, description=$2, startdate=$3, inprogress=$4 WHERE id= $5 ", [title, description, startdate, inprogress, req.params.id])
    .then(res.status(200).json({success: true, data: []}))
    .catch(err => next(err))
};

exports.getTopic = (req, res, next) => {
  try {
    let topic = await pool.query("SELECT * FROM topics WHERE id=$1", [req.params.id])
    res.status(200).json({success: true, data: topic}
    )
  } catch (err) {
    next(err)
  }
};

exports.deleteTopic = (req, res, next) => {
  pool.query("DELETE FROM topics WHERE id=$1", [req.params.id])
    .then(res.status(200).json({success: true, data: []}))
    .catch(err => next(err))
};

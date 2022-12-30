const sqlite = require('better-sqlite3-with-prebuilds');
const db = new sqlite("data/aRisusAnteMori.db");
exports.db = db;
-- Create Database
CREATE DATABASE IF NOT EXISTS decisionai_db;
USE decisionai_db;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Decisions Table
CREATE TABLE IF NOT EXISTS decisions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  problem TEXT NOT NULL,
  option1_name VARCHAR(255) NOT NULL,
  option2_name VARCHAR(255) NOT NULL,
  recommendation TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Pros and Cons Table
CREATE TABLE IF NOT EXISTS pros_cons (
  id INT PRIMARY KEY AUTO_INCREMENT,
  decision_id INT NOT NULL,
  option_number INT NOT NULL,
  type ENUM('pro', 'con') NOT NULL,
  content TEXT NOT NULL,
  FOREIGN KEY (decision_id) REFERENCES decisions(id) ON DELETE CASCADE
);

-- Trade-offs Table
CREATE TABLE IF NOT EXISTS tradeoffs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  decision_id INT NOT NULL,
  content TEXT NOT NULL,
  FOREIGN KEY (decision_id) REFERENCES decisions(id) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_decision_user ON decisions(user_id);
CREATE INDEX idx_decision_created ON decisions(created_at);
CREATE INDEX idx_proscons_decision ON pros_cons(decision_id);
CREATE INDEX idx_tradeoffs_decision ON tradeoffs(decision_id);

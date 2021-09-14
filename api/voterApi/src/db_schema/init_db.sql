CREATE DATABASE IF NOT EXISTS angular_vote;
USE angular_vote;
DROP TABLE IF EXISTS votes;
CREATE TABLE IF NOT EXISTS votes(
	id INT AUTO_INCREMENT PRIMARY KEY,
    icon VARCHAR(50) NOT NULL,
    num_of_votes INT DEFAULT 0
);

INSERT INTO votes(icon) VALUES 
("love"),
("happy"),
("neutral"),
("sad"),
("angry");

-- Testing
-- UPDATE votes SET num_of_votes = 10 WHERE icon='sad';
-- SELECT icon, num_of_votes FROM votes;
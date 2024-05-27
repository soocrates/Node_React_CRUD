-- Create the table
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    dob DATE NOT NULL,
    result VARCHAR(10) NOT NULL
);

-- Insert  data
INSERT INTO students (name, dob, result) VALUES
('John Doe', '2000-01-01', 'Pass'),
('Jane Smith', '2001-02-15', 'Fail'),
('Robert Brown', '2002-03-30', 'Pass'),
('Emily Davis', '2003-04-20', 'Pass'),
('Michael Wilson', '2004-05-25', 'Fail');

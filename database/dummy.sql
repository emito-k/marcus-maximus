-- Populate User table
INSERT INTO User (username, password, email, first_name, last_name, date_created, last_login)
VALUES 
('johndoe', 'password123', 'john.doe@example.com', 'John', 'Doe', NOW(), NOW()),
('janedoe', 'password123', 'jane.doe@example.com', 'Jane', 'Doe', NOW(), NOW());

-- Populate School table
INSERT INTO School (owner_user_id_fk, school_name, description, thumbail_url)
VALUES 
(1, 'Harvard University', 'An elite university', 'http://example.com/harvard.jpg'),
(2, 'Stanford University', 'Another elite university', 'http://example.com/stanford.jpg');

-- Populate Role table
INSERT INTO Role (name, description, school_id_fk)
VALUES 
('Student', 'A student role', 1),
('Teacher', 'A teacher role', 1),
('Student', 'A student role', 2),
('Teacher', 'A teacher role', 2);

-- Populate Member table
INSERT INTO Member (user_id_fk, role_id_fk, school_id_fk)
VALUES 
(1, 1, 1),
(1, 2, 1),
(2, 3, 2),
(2, 4, 2);

-- Populate Profile table
INSERT INTO Profile (profile_picture_url, bio, user_id_fkd)
VALUES 
('http://example.com/johndoe.jpg', 'This is John Doe\'s bio.', 1),
('http://example.com/janedoe.jpg', 'This is Jane Doe\'s bio.', 2);

-- Populate Module table
INSERT INTO Module (school_id_fk, name, description, credits, department)
VALUES 
(1, 'Introduction to Computer Science', 'Learn the basics of computer science.', 4, 'CS'),
(1, 'Advanced Mathematics', 'Deep dive into mathematics.', 4, 'Math'),
(2, 'Introduction to Physics', 'Learn the basics of physics.', 4, 'Physics'),
(2, 'Modern Literature', 'Study modern literary works.', 3, 'Literature');

-- Populate Registered table
INSERT INTO Registered (member_id_fk, module_id_fk)
VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4);

-- Populate Permission table
INSERT INTO Permission (name, description)
VALUES 
('read', 'Permission to read content'),
('write', 'Permission to write content');

-- Populate PermissionRole table
INSERT INTO `Permission-Role` (role_id_fk, permission_id_fk)
VALUES 
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(3, 1),
(4, 2);

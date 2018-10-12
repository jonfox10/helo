SELECT p.title, p.image, p.content, u.username, u.profile 
FROM helo_post p 
JOIN helo_user u ON p.author_id = u.helo_userId;
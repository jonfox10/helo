SELECT *
FROM helo_user
WHERE username = $1 AND password = $2;

SELECT * FROM users;
SELECT * FROM friends;

/* Group users by state */
SELECT COUNT(id) AS users, state AS states, SUM(age) AS totalAges FROM users
  GROUP BY state
  ORDER BY states ASC;

/* Get users in two states, that are older than 18 */
SELECT * FROM users
  WHERE state IN ('CA', 'AZ')
    AND age > 18;

/* Get users in two states, that are older than 18 */
SELECT * FROM users
  WHERE city LIKE '%Monterey%';

/* List of accepted friends for Ainsley */
SELECT users.id, users.first, users.last 
  FROM users, friends AS friend_requests, friends AS friend_accepts
  WHERE friend_requests.user_id = friend_accepts.friend_id
    AND friend_requests.friend_id = friend_accepts.user_id
    AND users.id = friend_requests.user_id
    AND users.first <> 'Ainsley';

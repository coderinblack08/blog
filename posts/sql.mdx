---
title: "Postgres/SQL Tutorial"
description: "Hope you enjoy! This tut should be able to cover the most common use cases for sql."
date: "2021-3-27"
---

Like most programming terms, you can pronounce SQL two ways. SEQUEL or S-Q-L.

First, we have to create a table (a collection of data). We can do this with the `CREATE` keyword as follows.

```sql
CREATE TABLE users;
```

This looks great, but it doesn't really do anything other than create a blank table. Let's add some columns to our table!

Side Note: You can use lower case keywords but I prefer to use uppercase to distinguish my statements.

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name VARCHAR(225) UNIQUE NOT NULL,
  age INTEGER DEFAULT 20
);
```

Ok, that's a lot. Let's go over it line by line (or column by column).

First, the `id` column has the type `INTEGER PRIMARY KEY`. The integer part is self-explanatory. A primary key is used in SQL to uniquely identify a row in the table. By default, the primary key will be an auto-incrementing number with a combination of a not-null and unique constraint.

`name` has a type of `VARCHAR(225) UNIQUE NOT NULL`. Unique and not null are again self-explanatory. `VARCHAR(225)` is similar to the `TEXT` type, except it has a character cap at 225.

`age` is an integer that defaults to 20 if no value is provided. Great, we now know how to create a table in postgres.

A quick note, if we wanted to alter this table after its initialization, we can use the `ALTER TABLE` keyword. Also, use double quotes around a column's name to use camel-case (use single quotes for regular strings).

```sql
ALTER TABLE users DROP COLUMN age;
ALTER TABLE users ADD COLUMN age INTEGER DEFAULT 20;
ALTER TABLE users RENAME COLUMN name TO username;
ALTER TABLE users ALTER COLUMN age SET NOT NULL;
-- and more!
```

We can also drop a table (delete it) with `DROP TABLE users;`.

Let's try to insert values into the table now. We can use the `INSERT INTO` keyword.

```sql
INSERT INTO users (name, age)
VALUES ('bob', 30);
```

Notice we didn't need to add a value for `id` because it is auto-generated.

We can update our row with the `UPDATE` keyword.

```sql
UPDATE users SET age = age + 1, name = name || ' john' WHERE id = 1;
```

The `||` operator concats two strings.

We can delete the row with the `DELETE` keyword.

```sql
DELETE FROM users; -- deletes all rows
DELETE FROM users WHERE age < 18; -- conditional delete
DELETE FROM users WHERE age IS NULL; -- IMPORTANT: use IS and not = when you are comparing with NULL
```

Now, let's query our data! We can use the `SELECT` keyword.

```sql
SELECT * FROM users; -- (1)
SELECT name, age FROM users; -- (2)
SELECT * FROM users WHERE COALESCE(age, 0) >= 18; -- (3)
```

(1) selects all rows and columns from users (note the `*` symbol selects all columns). (2) selects only the name and age from the users table. (3) selects rows in which the user is greater than 18. The `COALESCE` function gives a default value of 0 if age is null.

Ok, now let's move onto relationships. A relation between two tables connects them together. To create a relation, first define a foreign key which references a different table's row's primary column.

There are three different relations:

- many to one
- one to many
- many to many

```sql
CREATE TABLE posts (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT,
  creator_id INTEGER REFERENCES users(id) NOT NULL
);
```

This relation is a **many to one** relation because there can be many posts that refer to one user.

Here, creator_id references the user id column. We can insert a post like this:

```sql
INSERT INTO posts (title, body, creator_id)
VALUES ('My Post', 'Lorem Ipsum', 1)
RETURNING *;
```

The `RETURNING *` part selects/returns the new, mutated row.

We can fetch posts and **join** the creator. A join dovetails the post row and user row. 

```sql
SELECT * FROM posts p INNER JOIN users u ON u.id = p.creator_id;
```

The letter u after users is an alias to help us avoid ambiguity. There are two main types of joins. `INNER JOIN` and `LEFT JOIN`.

- A inner join returns rows if there a match on both sides (both sides aren't null)

- A left join returns all rows from the left side, even if there are no matches on the right. A right join is the same thing but reversed.

Let's try to use foreign keys to create a likes table.

```sql
CREATE TABLE likes (
   user_id INT REFERENCES users(id),
   post_id INT REFERENCES posts(id),
   PRIMARY KEY (user_id, post_id)
);

INSERT INTO likes (user_id, post_id)
VALUES (1, 1);
```

The composite key (line 4) allows us to make sure every user can only like a post once!

Ok let's go over some more options for `SELECT`. Let's add a created_at column.

```sql
ALTER TABLE posts ADD COLUMN created_at DATE DEFAULT now();

SELECT * FROM posts p
INNER JOIN users u ON u.id = p.user_id
ORDER BY p.created_at DESC
LIMIT 5; -- orders posts descending by the created_at column and selects only 5;

SELECT count(*) FROM posts; -- counts number of posts
```

You can look at the [postgres docs](https://www.postgresql.org/docs/9.5/sql-select.html) for more functions (avg, sum, etc).

We can also preform sub queries. In the sql below, we select all posts that have at least one like.

```sql
SELECT * FROM posts p WHERE EXISTS (
  SELECT * FROM likes l WHERE l.post_id = p.id
);
```

We can bundle multiple commands into a transaction.

```sql
BEGIN;
UPDATE users SET age = 80 WHERE id = 1;
SELECT * FROM users;
COMMIT;
```

We can use savepoints to revert changes we made.

```sql
BEGIN;
SAVEPOINT my_savepoint;
UPDATE users SET age = 80 WHERE id = 1;
ROLLBACK TO my_savepoint; 
SELECT * FROM users;
COMMIT;
```

Well, there we have it. A very simple SQL tut that should get you through most use cases! Hope you enjoyed this article/tut. **Peace ✌️**.
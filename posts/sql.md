---
title: "Converting y'all from Mongo to Postgres"
description: "Y'all gonna be shook when you see the power of SQL. This is basically just a SQL tut 😜 ."
date: "2021-3-26"
---

Before we get started, SQL is pronounced SEQUEL. If you pronounce it S-Q-L you're wrong 🤷‍♂️. 

Ok with that out of the way, let's discuss why I even use SQL when I could use a no-SQL database with Mongo that could "save time and is also web-scale".

SQL is honestly not too bad too learn and write, especially when ORMs are a thing. The power of SQL is amazing. Can you have relations in Mongo? No. Can you have primary/composite keys? No. Can you use sub-queries? No. Are there built in functions for tree structures, "recursive functions", fulltext-ish search, or a schema? **No, no, no, and no**.

Ok, let's get our hands dirty, shall we?

First, we have to create a table. We can do this with the `CREATE` keyword as follows.

```sql
CREATE TABLE users;
```

This looks great, but doesn't really do anything other than create a blank table. Let's add some columns to our table!

Side Note: You can use lower case keywords but I prefer uppercase to distinguish my statements.

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

A quick note, if we wanted to alter this table after its initialization, we can use the `ALTER TABLE` keyword.

```sql
ALTER TABLE users DROP COLUMN age;
ALTER TABLE users ADD COLUMN age INTEGER DEFAULT 20;
ALTER TABLE users RENAME COLUMN name TO username;
ALTER TABLE users ALTER COLUMN age SET NOT NULL;
-- and more!
```

We can also drop a table (delete it) with `DROP TABLE users;`.
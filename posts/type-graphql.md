---
title: "Using GraphQL with Typescript"
date: "2021-3-25"
description: "Integrating GraphQL with Typescript in the frontend and backend."
---

For my project [Contest Pug](https://github.com/coderinblack08/contest-pug-2), I used [Type GraphQL](https://typegraphql.com/) and [GraphQL Codegen](https://www.graphql-code-generator.com/) to "generate" types for my GraphQL schemas on both the backend and frontend. 

Type-graphql is awesome because it uses a code-first approach with decorators. Also, it fits super duper well with TypeORM, my orm of choice. Here is an example of a resolver:

```ts
import { Resolver, Query } from "type-graphql";

@Resolver()
export class Hello {
  @Query()
  async hello() {
    return "Hello World";
  }
}
```

And here is an example of a schema with TypeORM & type graphql:

```ts
import { Column } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
export class User {
  @Field()
  @Column({ unique: true })
  name: string;

  @Column()
  password: string;

  @Column()
  @Field(() => Int)
  age: number;
}
```

Also, I switched from single to double quotes a few weeks back so deal with it 😜 .

We can easily use this to create a mutation which is typed 👍 :

```ts
@Resolver(User)
export class UserResolver {
@Mutation(() => User)
  async register(
    @Arg("args", () => RegisterArgs) options: RegisterArgs,
    @Ctx() { req }: MyContext
  ): Promise<User> {
    const hashedPassword = await argon.hash(options.password);

    const user = await User.create({
      ...options,
      password: hashedPassword,
    }).save();

    req.session.userId = user.id;
    return { user };
  }
}
```

Type-graphql is amazing. It seamlessly integrates with TypeORM and also allows us to write **DRY code**.

Let's move on to graphql codegen. If we run the following commands

```bash
yarn add -D @graphql-codegen/cli
yarn graphql-codegen init
```

Fill out the questionnaire provided by the cli. Inside the `codegen.yml` file should contain your config with the plugins for apollo. You can switch this out for urql if you're using that.

```yml
overwrite: true
schema: "http://localhost:4000/graphql"
documents: "src/graphql/**/*.graphql"
generates:
  src/generated/graphql.tsx:
    plugins:
      - "typescript"
      - "typescript-react-apollo"
```

Every query and mutation you create in the `/graphql` folder will auto generate hooks and types!

```ts
const { data, loading } = useHelloQuery();

return (
  <div>
  {loading ? "loading..." : data}
  </div>
);
```

That's it folks! Checkout the contest pug repo if you want to see an example of both technologies! Peace ✌️ .

P.S. If you aren't using GraphQL, **you're missing out big time**.


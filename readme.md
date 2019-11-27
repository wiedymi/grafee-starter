# Grafee Back-end Starter

**Grafee** is the easiest way to create an awesome GraphQL API.

### Getting started

```
git clone https://github.com/wiedymi/grafee-starter.git
yarn install
yarn dev

🚀  GraphQL: http://localhost:4040/graphql
🚀  Subscriptions: ws://localhost:4040/graphql
```


### Technologies

- [@grafee/core](https://www.npmjs.com/package/@grafee/core) - GraphQL server
- [@grafee/mongo](https://www.npmjs.com/package/@grafee/mongo) - Database for GraphQL
- [@grafee/shield](https://www.npmjs.com/package/@grafee/shield) - Access control for GraphQL

### Structure

- access - access control folder
- constants - constants for project
- helpers - custom helpers
- passport - auth middlewares (JWT)
- modules - grafee modules based on [@graphql-modules](https://www.npmjs.com/package/@graphql-modules/core)
- services - database services based on [mongoose](https://www.npmjs.com/package/mongoose)

### license MIT

```
MIT License

Copyright (c) 2019 Yakauleu Uladzislau

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

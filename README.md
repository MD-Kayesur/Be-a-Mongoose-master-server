### Mongoose setup

1. install the mongodb server msi from crome
2. open the file by vs code

## install npm

```bash
npm i
```

## install mongoose from mongoose documentation

```bash
npm install mongoose
```

## install express from express documentation

```bash
npm install express --save
```

## install ts-node-dev for run ts file & setup ih scripts package

```bash
npm i ts-node-dev
ts-node-dev --respawn --transpile-only server.ts
```

## created a tscobfig file

```bash
tsconfig.json
```

## added some type like this

res:Response, req:Request , port:number,next:NextFunction

### for parse data

# json data and url recieve

app.use(express.json())
app.use(express.urlencoded({extended:true}))

### inserting data in mongodb

- step by step
- 1. inteface
- 2.  schema
- 3.model
- 4.  database queary

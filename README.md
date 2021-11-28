### プロジェクト作成

```
$ cd web-server
$ npm init
 (default enter)
$ npm i express
$ node index.js
```

### package.json scripts に追記

```
    "start": "node index.js",
```

### サーバー起動

```
$ npm start
```

### 動作確認

```
http://localhost:3000/
```

### Hot reload

```
$ npm install nodemon --save-dev
```

### package.json scripts に追記

```
    "dev": "nodemon index.js",
```

### 起動

```
$ npm run dev
```

### ejs 導入

```
npm i ejs
```

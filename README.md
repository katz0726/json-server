# 概要

json-server にモックデータを投入した。モックサーバとして利用する場合は、適宜、db.json を追加修正する。

# 使い方

- db.json に json データ投入
- server.js にルーティングを記載

```
# 以下の場合、http://localhost:5000/api/articlesにアクセスするとdb.jsonのキーに紐づくvalueを返す
"/api/articles": "/articles",
```

- `npm run start`を実行する

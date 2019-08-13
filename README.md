# SimpleNodeExpressUnitTest

1. npm install

2. npm test

```
    test case 1
GET /
    V 200을 리턴해야 한다. (1000ms 이내)
GET /
    V 200을 리턴해야 한다. (100ms 이내)
GET /
    V 200을 리턴해야 한다. (100ms 이내)

    test case 2
GET /
    V GET / 테스트. return {"Hello World"}
GET /user
    V GET /user 테스트. return { username: "John", pw: "test1234" }
```

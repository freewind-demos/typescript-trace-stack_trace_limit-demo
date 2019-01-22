TypeScript Async Await Error Stack Demo
=======================================

Async/await function doesn't provide good stack trace (missing middle calls),
but we can use `trace` and `clarify` to make it better.

```
npm install
npm run async-await-demo1
```

```
Error: Something Bad
    at /Users/peng.li/development/typescript-async-await-error-stack-demo/hello.ts:7:9
    at Generator.next (<anonymous>)
    at fulfilled (/Users/peng.li/development/typescript-async-await-error-stack-demo/async-await-demo.ts:4:58)
```

```
npm run async-await-demo2
```

```
Error: Something Bad
    at /Users/peng.li/development/typescript-async-await-error-stack-demo/hello.ts:7:9
    at fulfilled (/Users/peng.li/development/typescript-async-await-error-stack-demo/async-await-demo.ts:4:58)
    at Object.<anonymous> (/Users/peng.li/development/typescript-async-await-error-stack-demo/hello.ts:15:9)
    at __awaiter (/Users/peng.li/development/typescript-async-await-error-stack-demo/async-await-demo.ts:3:12)
    at functionTwo (/Users/peng.li/development/typescript-async-await-error-stack-demo/async-await-demo.ts:21:12)
    at Object.<anonymous> (/Users/peng.li/development/typescript-async-await-error-stack-demo/hello.ts:14:1)
    at Module.m._compile (/Users/peng.li/development/typescript-async-await-error-stack-demo/node_modules/ts-node/src/index.ts:439:23)
    at Object.require.extensions.(anonymous function) [as .ts] (/Users/peng.li/development/typescript-async-await-error-stack-demo/node_modules/ts-node/src/index.ts:442:12)
```

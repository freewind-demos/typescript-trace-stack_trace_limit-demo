TypeScript "trace" "--stack_trace_limit" Demo
=============================================

Note:

1. I also use `clarify` in this demo because it's important to capture function names
to error stack messages.

2. Use `node -r ts-node/register --stack_trace_limit=5` works, but I can't find a way to
make `ts-node --stack_trace_limit=5` work. From <https://www.npmjs.com/package/ts-node>,
we can see it's not possible:

> Note: If you need to use advanced node.js CLI arguments (e.g. --inspect),
> use them with node -r ts-node/register instead of the ts-node CLI.

```
npm install
npm run demo
```


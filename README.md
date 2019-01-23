TypeScript "trace" "--stack_trace_limit" Demo
=============================================

Note:

1. I also use `clarify` in this demo because it's important to capture function names
to error stack messages.

2. Use `node -r ts-node/register --stack_trace_limit=5` works, but I can't find a way to
make `ts-node --stack_trace_limit=5` work.

```
npm install
npm run demo
```


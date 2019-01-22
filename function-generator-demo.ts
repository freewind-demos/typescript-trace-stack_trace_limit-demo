const co = require('co');

function* functionOne() {
  yield new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1);
  });
  throw new Error('Something Bad');
}

function* functionTwo() {
  yield* functionOne();
}

co(functionTwo())
  .catch((error: any) => {
    console.log(error);
  });

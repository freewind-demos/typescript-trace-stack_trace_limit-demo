async function functionOne() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1);
  });
  throw new Error('Something Bad');
}

async function functionTwo() {
  await functionOne();
}

functionTwo()
  .catch((error) => {
    console.error(error);
  });

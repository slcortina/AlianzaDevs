function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`resultado: ${result3}`);
      });
    });
  });
}

doOperation();
console.log("hola");
// "¡Hola, mi nombre es Miriam!"
const fetchPromisehttp1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromisehttp2 = fetch(
  "httfps://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromisehttp3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.all([fetchPromisehttp1, fetchPromisehttp2, fetchPromisehttp3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch http: ${error}`);
  });

const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise3 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });

const worker = new Worker();

doVerification();

async function doVerification() {
  try {
    const result = await verifyUserAsync("mikhail");
    console.log(result);
  } catch (err) {
    console.log(err);
  }

  // .then will run
  verifyUserAsync("mikhail")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  // .catch will run
  verifyUserAsync("kevin")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

function verifyUserAsync(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username == "mikhail") {
        resolve("Welcome!");
      } else {
        reject("Access denied!");
      }
    }, 5000);
  });
}

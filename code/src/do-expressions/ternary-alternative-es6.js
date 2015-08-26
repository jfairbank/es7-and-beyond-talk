function readyResponse(ready) {
  const response = ready ?
    "I'm ready. Let's go!" : "Hold on a minute.";

  console.log(response);
}

readyResponse(true);  // I'm ready. Let's go!
readyResponse(false); // Hold on a minute.

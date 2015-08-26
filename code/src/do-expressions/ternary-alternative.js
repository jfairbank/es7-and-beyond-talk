function readyResponse(ready) {
  const response = do {
    if (ready) "I'm ready. Let's go!";
    else "Hold on a minute.";
  };

  console.log(response);
}

readyResponse(true);  // I'm ready. Let's go!
readyResponse(false); // Hold on a minute.

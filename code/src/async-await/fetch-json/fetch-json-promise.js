function fetchJson(url) {
  return fetch(url).then(resp => {
    return resp.json().then(data => {
      if (resp.status >= 200 && resp.status < 300) {
        return data;
      }

      const error = new Error(resp.responseText);
      error.data = data;
      throw error;
    });
  });
}

export default fetchJson;

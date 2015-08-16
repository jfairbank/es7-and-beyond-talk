async function fetchJson(url) {
  const resp = await fetch(url);
  const data = await resp.json();

  if (resp.status >= 200 && resp.status < 300) {
    return data;
  }

  const error = new Error(resp.responseText);
  error.data = data;
  throw error;
}

export default fetchJson;

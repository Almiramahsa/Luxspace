export default async function fetchData({ url, method = 'GET', host = process.env.REACT_APP_API_HOST, body }) {
  try {
    const response = await fetch(`${host}${url}`, {
      method,
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
    const jsonResponse = await response.json();
    if (!response.ok) {
      throw new Error(jsonResponse);
    }
    return jsonResponse;
  } catch (error) {
    throw error;
  }
}

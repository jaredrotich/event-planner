export const fetchWrapper = {
    get: async (url) => {
      const response = await fetch(url);
      return handleResponse(response);
    },
    post: async (url, body) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      return handleResponse(response);
    },
   
  };
  
  async function handleResponse(response) {
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || 'Request failed');
    }
    return response.json();
  }
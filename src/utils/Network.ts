export default class Network {
  // Please config network here
  // static BASE_URL = 'http://localhost:3000';
  // ...

  static async get<T, P = any>(path: string, params?: P): Promise<T> {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }

  static async post<T, P = any>(path: string, params?: P): Promise<T> {
    const response = await fetch(path, {
      method: 'POST',
      body: JSON.stringify(params),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
}

export default class Network {
  static async get<T, P = any>(path: string, params?: P): Promise<T> {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
}

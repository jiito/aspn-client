const API_URL = 'localhost:3000';

interface Project {
  id: Number;
}
export class AspnClient {
  project: Project = { id: 1 };
  async get(route: String) {
    let res = await fetch(`${API_URL}/get?${route}`);
    return res;
  }
}

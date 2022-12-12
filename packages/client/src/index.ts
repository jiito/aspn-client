import { CONFIG } from './config';

interface Project {
  id: Number;
  function_id: Number;
}
export class AspnClient {
  project: Project = { id: 1, function_id: 3 };

  constructor(project: Project) {
    this.project = project;
  }

  async get(route: String) {
    let functionId = 8;
    let res = await fetch(`${CONFIG.apiUrl}/function/${functionId}/proxy`);
    return res;
  }
}

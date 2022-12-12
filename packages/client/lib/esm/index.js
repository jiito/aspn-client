import { CONFIG } from './config';
export class AspnClient {
    project = { id: 1, function_id: 3 };
    constructor(project) {
        this.project = project;
    }
    async get(route) {
        let functionId = 8;
        let res = await fetch(`${CONFIG.apiUrl}/function/${functionId}/proxy`);
        return res;
    }
}
//# sourceMappingURL=index.js.map
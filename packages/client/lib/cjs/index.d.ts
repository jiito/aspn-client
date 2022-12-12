interface Project {
    id: Number;
    function_id: Number;
}
export declare class AspnClient {
    project: Project;
    constructor(project: Project);
    get(route: String): Promise<Response>;
}
export {};

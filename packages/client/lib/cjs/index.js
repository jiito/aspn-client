"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AspnClient = void 0;
const config_1 = require("./config");
class AspnClient {
    constructor(project) {
        this.project = { id: 1, function_id: 3 };
        this.project = project;
    }
    get(route) {
        return __awaiter(this, void 0, void 0, function* () {
            let functionId = 8;
            let res = yield fetch(`${config_1.CONFIG.apiUrl}/function/${functionId}/proxy`);
            return res;
        });
    }
}
exports.AspnClient = AspnClient;
//# sourceMappingURL=index.js.map
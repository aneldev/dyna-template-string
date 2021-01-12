"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynaTemplateString = void 0;
var dynaTemplateString = function (_a) {
    var text = _a.text, variables = _a.variables;
    var output = text;
    Object.keys(variables)
        .forEach(function (variable) {
        return output = output
            .replace(new RegExp('\\${' + variable + '}', 'g'), variables[variable]);
    });
    return output;
};
exports.dynaTemplateString = dynaTemplateString;
//# sourceMappingURL=dynaTemplateString.js.map
export var dynaTemplateString = function (_a) {
    var text = _a.text, variables = _a.variables;
    var output = text;
    Object.keys(variables)
        .forEach(function (variable) {
        return output = output
            .replace(new RegExp('\\${' + variable + '}', 'g'), variables[variable]);
    });
    return output;
};
//# sourceMappingURL=dynaTemplateString.js.map
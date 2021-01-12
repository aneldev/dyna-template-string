export const dynaTemplateString = (
  {
    text,
    variables,
  }
    : {
    text: string;
    variables: {
      [variableName: string]: string;
    };
  },
): string => {
  let output = text;
  Object.keys(variables)
    .forEach(variable =>
      output = output
        .replace(
          new RegExp('\\${' + variable + '}', 'g'),
          variables[variable],
        )
    );
  return output;
};

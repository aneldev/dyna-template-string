# dynaTemplateString

Works like [JS Template String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

The test is string, you don't use the ``` symbol and the variables are passed as a object.

# Example

```
dynaTemplateString({
  text: 'Hello ${name}! How are you ${name} today?',
  variables: {
    name: 'John',
  },
})
```
Returns:
```
Hello John! How are you John today?
```

If the variable is not passed in `variables` object the `${varName}` will remain on the output, indicating that this variable is missing.

For Instance

```
dynaTemplateString({
  text: 'Hello ${salutation} ${firstName} ${lastName}.',
  variables: {
    salutation: 'Mr',
    lastName: 'Smith',
    // firstName is missing!
  },
})
```
Returns:
```
Hello Mr ${firstName} Smith.
```


# API

```
export const dynaTemplateString = (
  args: {
    text: string;
    variables: {
      [variableName: string]: string;
    };
  },
): string
```
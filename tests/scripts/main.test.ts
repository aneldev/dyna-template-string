import {dynaTemplateString} from "../../src"

describe('dynaTemplateString', () => {
  it('A Variable', () => {
    expect(
      dynaTemplateString({
        text: 'Hello ${name}! How are you ${name} today?',
        variables: {
          name: 'John',
        },
      })
    )
      .toMatchSnapshot();
	});
  it('Variables and line breaks', () => {
    expect(
      dynaTemplateString({
        text: 'Hello ${salutation} ${lastName}!\nWill be a long day ${firstName}. You won\'t forget your name ${firstName}!',
        variables: {
          salutation: 'Mr',
          firstName: 'John',
          lastName: 'Smith',
        },
      })
    )
      .toMatchSnapshot();
	});
  it('Undefined variable', () => {
    expect(
      dynaTemplateString({
        text: 'Hello ${salutation} ${lastName}!\nThe report will be ready at ${date}',
        variables: {
          salutation: 'Mr',
          lastName: 'Smith',
        },
      })
    )
      .toMatchSnapshot();
	});
});

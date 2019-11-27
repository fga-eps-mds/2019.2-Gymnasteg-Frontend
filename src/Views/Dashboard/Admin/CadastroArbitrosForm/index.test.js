import { mapPropsToValues } from '.';

describe('CadastroArbitrosForm', () => {
  test('mapPropsToValues', () => {
    expect(mapPropsToValues()).toEqual({
      name: '',
      email: '',
      JudgeType: 'Execution and Difficulty',
    });
  });
});

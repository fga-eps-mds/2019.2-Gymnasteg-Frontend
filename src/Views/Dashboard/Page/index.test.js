import Page, { handleMenu } from '.';

describe('Page component', () => {
  test('Deve estar definido', () => {
    expect(Page).toBeDefined();
  });

  test('handleMenu', () => {
    const mockProps = {
      meuCollapsed: true,
      setMenuCollapsed: jest.fn(),
    };

    expect(
      handleMenu(mockProps),
    ).toBe(mockProps.setMenuCollapsed(false));
  });
});

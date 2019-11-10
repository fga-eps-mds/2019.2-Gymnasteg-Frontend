import Page, { handleMenu } from '.';

describe('Page component', () => {
  test('Deve estar definido', () => {
    expect(Page).toBeDefined();
  });

  test('handleMenu', () => {
    const mockProps = {
      menuOpened: false,
      setMenuOpened: jest.fn(),
    };

    expect(
      handleMenu(mockProps),
    ).toBe(mockProps.setMenuOpened(true));
  });
});

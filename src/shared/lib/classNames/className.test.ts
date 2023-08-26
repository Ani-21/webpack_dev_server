import { classNames } from 'shared/helpers/classNames/classNames';

describe('classNames', () => {
  // test('with one param', () => {
  //   expect(classNames('someClass', {})).toBe('someClass');
  // });

  test('with all params', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames('someClass', { hovered: true }, ['class1', 'class2'])).toBe(expected);
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClass className';
    expect(classNames('someClass', { hovered: false }, ['className'])).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'someClass className hovered';
    expect(classNames('someClass', { hovered: true, scrollable: false }, ['className'])).toBe(expected);
  });
});

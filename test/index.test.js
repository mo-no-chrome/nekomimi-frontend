import { Hello } from '../src/js/index';
// defaultのimportではなくnamed importをしていることに注意
// defaultのimportだとHelloインスタンスが返る

const name = 'Jest';
let hello;

describe('Hello Class Test', () => {
  beforeEach(() => {
    hello = new Hello(name);
  });

  test('We can check if the name defined the class constructor', () => {
    expect(hello.name).toBe(name);
  });

  test('We can check if console.log() called on say() method', () => {
    const spy = jest.spyOn(console, 'log');

    hello.say();

    // spyしたメソッドが呼ばれていることを確認する
    expect(spy).toHaveBeenCalledWith(`Hello ${name} World!`);

    spy.mockReset();
    spy.mockRestore();
  });
});

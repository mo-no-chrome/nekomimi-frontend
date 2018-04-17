// @flow
export class Hello {
  name: string; // this.nameの型定義

  constructor(name: string) { // 引数nameの型定義
    this.name = name;
    this.say();
  }

  say(): void { // 返り値の型定義は省略してもOK（voidである場合）
    console.log(`Hello ${this.name} World!`);
  }
}

export default new Hello('Nekomimi');

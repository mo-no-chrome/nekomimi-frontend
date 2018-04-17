// @flow
import React from 'react';
import ReactDOM from 'react-dom';
// <Heading>コンポーネントを読み込む
import Heading from './heading';

export class Render {
  constructor(targetId: string) {
    // コンポーネントを出力するDOMを取得する
    const target = document.getElementById(targetId);
    if (target != null) {
      this.render(target);
    }
  }

  render(target: HTMLElement) {
    ReactDOM.render(<Heading name="Nekomimi" />, target);
  }
}

export default new Render('nekomimi-frontend');

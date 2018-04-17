// @flow
import React from 'react';

// propsの型定義
type Props = {
  name: string;
}

const Heading = (props: Props) => <h2>Hello {props.name} World!</h2>;

export default Heading;

// @flow
import React from 'react';
import styles from '../css/heading.css';

// propsの型定義
type Props = {
  name: string;
}

const Heading = (props: Props) => <h2 className={styles.heading}>Hello {props.name} World!</h2>;

export default Heading;

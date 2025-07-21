## omi-reactify

Bridge between omi and react.

## Install

```bash
npm i omi-reactify
```

## Usage

```tsx
import React, { useEffect } from 'react';
import reactify from 'omi-reactify';

const OmiReactComponent = reactify('omi-web-component');

const App = () => {
  const [complex, setComplex] = React.useState({ name: 'React' });
  const ref = React.useRef();

  useEffect(()=>{
    console.log('ref', ref.current)
  }, [])

  return <OmiReactComponent
    show={true}
    label='React Component' // string
    complex={complex} // object
    ref={ref}
    camelCase="camelCase" // camelCase key
    style={{ color: 'red' }} // style object, you can also pass a style string
    onMockClick={(_e: React.MouseEvent) => { setComplex({ name: 'Omi'}) }} // onMockClick -> mockClick
  >
    <span className='content'>content</span>
  </OmiReactComponent>
}
```

更多 OmiTreeReact 组件文档请见 [OmiTreeReact.md](./OmiTreeReact.md)
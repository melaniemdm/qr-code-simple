# qr-code-simple

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/qr-code-simple.svg)](https://www.npmjs.com/package/qr-code-simple) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save qr-code-simple
```

## Usage

```jsx
import React, { Component } from 'react'

import {EnterUrl} from 'qr-code-simple'
import 'qr-code-simple/dist/index.css'

class Example extends Component {
  render() {
    return <EnterUrl options={{backgroundColor: 'yellowgreen', heightQrCode: '300px'}}/>
  }
}
```

### Available options

|option                  |type     |default|
|---           |---      |---      |
|backgroundColor         |String   |pink   |
|backgroundColorButton   |String   |blue   |
colorTextButton          |String   |white  |
|widthInput              |String   |500px  |
|marginTopQrCode         |String   |50px   |
|heightQrCode            |String   |150px  |


## License

MIT © [melaniemdm](https://github.com/melaniemdm)

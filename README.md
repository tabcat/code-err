# Error-Code

> create error instances with a code (and props)<br/>
> a more intuitive [err-code](https://github.com/IndigoUnited/js-err-code)<br/>

## Description

Extends the builtin Error class with `.code` and `.props` properties for better error handling.

## Install

### npm:

`npm install error-code`

## Import

### ESM

`import { ErrorCode } from 'error-code'`

### CJS

`const { ErrorCode } = require('error-code')`

## Usage

```ts
const message = 'this is an error message'
const code = 'THIS_IS_AN_ERROR_CODE'
interface Props { ... }
const props: Props = { ... }

// typescript without props
new ErrorCode(message, code)

// typescript with props
new ErrorCode<Props>(message, code, props)

// javascript
new ErrorCode(message, code, props)
```

## API

### ErrorCode Class

#### constructor\<T\>(code: string, props?: T extends Record<string, any>)

### ErrorCode Instance

#### code: string

The error code provided in the constructor

#### props: T extends Record<string, any>

If undefined in constructor it is an empty record/object `{}`.


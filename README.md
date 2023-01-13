[![npm](https://img.shields.io/npm/v/code-err?color=darkred&style=flat-square)](https://www.npmjs.com/package/code-err)

# code-err 

> create error instances with a code (and props)<br/>
> a more intuitive [err-code](https://github.com/IndigoUnited/js-err-code)<br/>

## Description

Extends the builtin Error class with `.code` and `.props` properties for better error handling.

## Install

### npm:

`npm install code-err`

## Import

### ESM

`import { CodeError } from 'code-err'`

<!--
### CJS

`const { CodeError } = require('code-err')`
-->

## Usage

```ts
const message = 'this is an error message'
const code = 'THIS_IS_AN_ERROR_CODE'
interface Props { ... }
const props: Props = { ... }

// typescript without props
new CodeError(message, { code })

// typescript with props
new CodeError<Props>(message, { code, props })

// javascript
new CodeError(message, { code, props })
```

## API

### CodeError Class

#### constructor<br/>&emsp; \<T extends Record\<string, any\>\><br/>&emsp; (message?: string, options?: { code?: string, props?: T, name?: string, cause?: unknown })

### CodeError Instance

#### `readonly` message: string

The error message provided to the constructor

*default value*: `''`

#### `readonly` code: string

The error code provided to the constructor

*default value*: `''`

#### `readonly` props: T

The error props provided to the constructor

*default value*: `{}`

#### `readonly` name: string

The error name provided to the constructor

*default value*: `CodeError`

#### `readonly` cause: unknown

The error cause provided to the constructor.

*default value*: `undefined`

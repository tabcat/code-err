'use strict'

import CodeError from '../src/index.js'
import { expect } from 'chai'

describe('coderra', () => {
  const message = 'my message'
  const code = 'ESOME'
  const props = { foo: 'bar', bar: 'foo' }

  it('should accept a string and add a code', () => {
    const err = new CodeError(message, code)

    expect(err).to.be.an.instanceof(CodeError)
    expect(err).to.be.an.instanceof(Error)
    expect(err.message).to.be.equal(message)
    expect(err.code).to.be.equal(code)
    expect(err.props).to.be.deep.equal({})
  })

  it('should accept a string and add a code & properties', () => {
    const err = new CodeError(message, code, props)

    expect(err).to.be.an.instanceof(CodeError)
    expect(err).to.be.an.instanceof(Error)
    expect(err.message).to.be.equal(message)
    expect(err.code).to.be.equal(code)
    expect(err.props.foo).to.be.equal(props.foo)
    expect(err.props.bar).to.be.equal(props.bar)
  })

  // describe('string as first argument', () => {
  // it('should create an error object without code but with properties', () => {
  //     const err = errcode(myErr, { foo: 'bar', bar: 'foo' });

  //     expect(err).to.be.an(Error);
  //     expect(err.code).to.be(undefined);
  //     expect(err.foo).to.be('bar');
  //     expect(err.bar).to.be('foo');
  // });

  // it('should set a non-writable field', () => {
  //     const myErr = new Error('my message');

  //     Object.defineProperty(myErr, 'code', {
  //         value: 'derp',
  //         writable: false,
  //     });
  //     const err = errcode(myErr, 'ERR_WAT');

  //     expect(err).to.be.an(Error);
  //     expect(err.stack).to.equal(myErr.stack);
  //     expect(err.code).to.be('ERR_WAT');
  // });

  // it('should add a code to frozen object', () => {
  //     const myErr = new Error('my message');
  //     const err = errcode(Object.freeze(myErr), 'ERR_WAT');

  //     expect(err).to.be.an(Error);
  //     expect(err.stack).to.equal(myErr.stack);
  //     expect(err.code).to.be('ERR_WAT');
  // });

  // it('should to set a field that throws at assignment time', () => {
  //     const myErr = new Error('my message');

  //     Object.defineProperty(myErr, 'code', {
  //         enumerable: true,
  //         set() {
  //             throw new Error('Nope!');
  //         },
  //         get() {
  //             return 'derp';
  //         },
  //     });
  //     const err = errcode(myErr, 'ERR_WAT');

  //     expect(err).to.be.an(Error);
  //     expect(err.stack).to.equal(myErr.stack);
  //     expect(err.code).to.be('ERR_WAT');
  // });

  // it('should retain error type', () => {
  //     const myErr = new TypeError('my message');

  //     Object.defineProperty(myErr, 'code', {
  //         value: 'derp',
  //         writable: false,
  //     });
  //     const err = errcode(myErr, 'ERR_WAT');

  //     expect(err).to.be.a(TypeError);
  //     expect(err.stack).to.equal(myErr.stack);
  //     expect(err.code).to.be('ERR_WAT');
  // });

  // it('should add a code to a class that extends Error', () => {
  //     class CustomError extends Error {
  //         /**
  //          * @param {any} val - wat
  //          */
  //         set code(val) {
  //             throw new Error('Nope!');
  //         }
  //     }

  //     const myErr = new CustomError('my message');

  //     Object.defineProperty(myErr, 'code', {
  //         value: 'derp',
  //         writable: false,
  //         configurable: false,
  //     });
  //     const err = errcode(myErr, 'ERR_WAT');

  //     expect(err).to.be.a(CustomError);
  //     expect(err.stack).to.equal(myErr.stack);
  //     expect(err.code).to.be('ERR_WAT');

  //     // original prototype chain should be intact
  //     expect(() => {
  //         const otherErr = new CustomError('my message');

  //         otherErr.code = 'derp';
  //     }).to.throwError();
  // });

  // it('should support errors that are not Errors', () => {
  //     const err = errcode({
  //         message: 'Oh noes!',
  //     }, 'ERR_WAT');

  //     expect(err.message).to.be('Oh noes!');
  //     expect(err.code).to.be('ERR_WAT');
  // });
  // });

  // describe('falsy first arguments', () => {
  //     it('should not allow passing null as the first argument', () => {
  //         // @ts-expect-error - 'null' is not assignable to parameter of type 'string'
  //         expect(() => { new CodeError(null, null); }).to.throwError((err) => {
  //             expect(err).to.be.a(TypeError);
  //         });
  //     });

  //     it('should not allow passing undefined as the first argument', () => {
  //         // @ts-expect-error - 'undefined' is not assignable to parameter of type 'string'
  //         expect(() => { new CodeError(undefined, undefined); }).to.throwError((err) => {
  //             expect(err).to.be.a(TypeError);
  //         });
  //     });
  // });
})

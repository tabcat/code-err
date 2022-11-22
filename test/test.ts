import { CodeError } from '../src/index.js'
import { expect } from 'chai'

describe('code-err', () => {
  const message = 'my message'
  const name = 'CodeError'
  const code = 'ESOME'
  interface Props {
    foo: 'bar'
    bar: 'foo'
  }
  const props: Props = {
    foo: 'bar',
    bar: 'foo'
  }

  it('should accept a message and add a code', () => {
    const err = new CodeError(message, code)

    expect(err).to.be.an.instanceof(CodeError)
    expect(err).to.be.an.instanceof(Error)
    expect(err.message).to.be.equal(message)
    expect(err.name).to.be.equal(name)
    expect(err.code).to.be.equal(code)
    expect(err.props).to.be.deep.equal({})
  })

  it('should accept a message and add a code & properties', () => {
    const err = new CodeError<Props>(message, code, props)

    expect(err).to.be.an.instanceof(CodeError)
    expect(err).to.be.an.instanceof(Error)
    expect(err.message).to.be.equal(message)
    expect(err.name).to.be.equal(name)
    expect(err.code).to.be.equal(code)
    expect(err.props.foo).to.be.equal(props.foo)
    expect(err.props.bar).to.be.equal(props.bar)
  })
})

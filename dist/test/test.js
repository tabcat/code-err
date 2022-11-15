import CodeError from '../src/index.js';
import { expect } from 'chai';
describe('code-error', () => {
    const message = 'my message';
    const code = 'ESOME';
    const props = {
        foo: 'bar',
        bar: 'foo'
    };
    it('should accept a message and add a code', () => {
        const err = new CodeError(message, code);
        expect(err).to.be.an.instanceof(CodeError);
        expect(err).to.be.an.instanceof(Error);
        expect(err.message).to.be.equal(message);
        expect(err.code).to.be.equal(code);
        expect(err.props).to.be.deep.equal({});
    });
    it('should accept a message and add a code & properties', () => {
        const err = new CodeError(message, code, props);
        expect(err).to.be.an.instanceof(CodeError);
        expect(err).to.be.an.instanceof(Error);
        expect(err.message).to.be.equal(message);
        expect(err.code).to.be.equal(code);
        expect(err.props.foo).to.be.equal(props.foo);
        expect(err.props.bar).to.be.equal(props.bar);
    });
});
//# sourceMappingURL=test.js.map
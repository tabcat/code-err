// https://github.com/libp2p/js-libp2p/issues/1269#issue-1280763716
export default class CodeError extends Error {
    constructor(message, code, props) {
        super(message);
        this.code = code;
        this.props = props ?? {}; // eslint-disable-line @typescript-eslint/consistent-type-assertions
    }
}
//# sourceMappingURL=index.js.map
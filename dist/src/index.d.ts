export default class ErrorCode<T extends Record<string, any>> extends Error {
    code: string;
    props: T;
    constructor(message: string, code: string, props?: T);
}
//# sourceMappingURL=index.d.ts.map
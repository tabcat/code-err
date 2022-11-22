// https://github.com/libp2p/js-libp2p/issues/1269#issue-1280763716
export class CodeError<T extends Record<string, any>> extends Error {
  constructor (
    message: string,
    public readonly code: string,
    public readonly props: T = {} as T // eslint-disable-line @typescript-eslint/consistent-type-assertions
  ) {
    super(message)

    this.name = 'CodeError'
  }
}

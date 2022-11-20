// https://github.com/libp2p/js-libp2p/issues/1269#issue-1280763716
export class CodeError<T extends Record<string, any> = Record<string, never>> extends Error {
  readonly props: T

  constructor (
    readonly message: string,
    readonly code: string,
    props?: T
  ) {
    super(message)

    this.props = props ?? {} as T // eslint-disable-line @typescript-eslint/consistent-type-assertions
  }
}

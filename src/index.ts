// https://github.com/libp2p/js-libp2p/issues/1269#issue-1280763716
export default class CodeError<T extends Record<string, any>> extends Error {
  code: string
  props: T

  constructor (message: string, code: string, props?: T) {
    super(message)

    this.code = code
    this.props = props ?? {} as T // eslint-disable-line @typescript-eslint/consistent-type-assertions
  }
}

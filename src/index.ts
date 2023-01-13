export interface Options<T extends Record<string, any>> {
  cause?: unknown
  name?: string
  code?: string
  props?: T
}

// https://github.com/libp2p/js-libp2p/issues/1269#issue-1280763716
export class CodeError<T extends Record<string, any>> extends Error {
  public readonly code: string
  public readonly props: T

  constructor (message?: string, options?: Options<T>) {
    super(message, options)

    this.name = options?.name ?? 'CodeError'
    this.code = options?.code ?? ''
    this.props = options?.props ?? ({} as T) // eslint-disable-line @typescript-eslint/consistent-type-assertions
  }
}

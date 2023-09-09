export type Healthcheck = {
  check(): Promise<Healthcheck.Result>
}

export namespace Healthcheck {
  export type Result = string
}

export type Country = {
  name: {
    common: string
  }
  currencies: {
    [key: string]: {
      name: string
    }
  }
  capital: string[]
  region: string
  languages: {
    [key: string]: string
  }
  borders: string[]
  population: number
  timezones: string[]
  area: number
  flags: {
    svg: string
  }
}

export type StopList = string[]

export interface StopInterface {
  id: number
  name: string
  geometry: string  
}

export interface AluxionerInterface {
  name: string
  description: string  
  homeToWork: number
  workToHome: number
  image: string
  id: number
}
import * as constant from './constant'
import getUrl from './utils'

export const url = getUrl(constant.ADDRESS, constant.PORT, constant.PATH)
export const region = constant.REGION
import BaseUrl from './config'
import { get } from 'common/js/axios'

const getMockData = get(BaseUrl + 'api/mockData')

export {
  getMockData
}

import makeRequest from "../makeRequest"
import { config } from "./config"

export const fetchCategory = async () => {
  const res = await makeRequest({
    method: 'GET',
    url: `${config}/suggestionFilter`,
  })
  const data = await res.data
  return data
}

import { sandboxApi } from "./AxiosService.js"

class QuoteService{
  async getApiQuote() {
    const res = await sandboxApi.get('quotes')
    console.log(res.data)
  }

  }


export const quoteService = new QuoteService
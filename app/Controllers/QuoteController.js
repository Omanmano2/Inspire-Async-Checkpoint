import { quoteService } from "../Services/QuoteService.js"

async function _getQuote(){
  try {
    await quoteService.getApiQuote()
  } catch (error) {
    console.error(error)
  }
}
export class QuoteController{
  constructor(data){
    _getQuote()
  }
}
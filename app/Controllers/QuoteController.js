import { ProxyState } from "../AppState.js"
import { quoteService } from "../Services/QuoteService.js"




function _drawQuote(){
  const quote = ProxyState.quote
  document.getElementById('quoteArea').innerHTML = quote.Template
}


async function _getQuote(){
  try {
    await quoteService.getApiQuote()
  } catch (error) {
    console.error(error)
  }
}
export class QuoteController{
  constructor(){
    ProxyState.on('quote' , _drawQuote)
    _getQuote()
  }

}
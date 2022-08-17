import {quoteData} from "./quote.js"

class Quote {
    constructor() {
        this.setRandomQuoteInitially()
    }

    setRandomQuoteInitially() {
        document.querySelector("#quote").innerText = `"${quoteData[Math.floor(Math.random() * quoteData.length)].quote}"`
        document.querySelector("#author").innerText = `- ${quoteData[Math.floor(Math.random() * quoteData.length)].author}`
    }
}

let QuoteFirstInstance = new Quote()

document.querySelector("#random-quote").addEventListener("click", () => QuoteFirstInstance.setRandomQuoteInitially())
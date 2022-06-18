import { FincraCore } from "../../api";
import { BaseError } from "../../utils/errors/error.base";
import { CreateQuoteDto } from "./dto";

/**
 * The quote module for handling the quote related operations.
 * @class Quote
 * @extends FincraCore
 */
export class Quote extends FincraCore {
    constructor(publicKey:string, secretKey:string) {
        super(publicKey, secretKey);
    }

   /**
    * It takes in a CreateQuoteDto object, makes a post request to the quotes endpoint, and returns the
    * response data
    * @param {CreateQuoteDto} data - The data to be sent to the server.
    * @returns The response from the API
    */
    public async createQuote(data:CreateQuoteDto){
        try {
            const request = this.getBaseUrl()
            const response = await request.post(`/quotes/generate`,data)
            console.log(response.data)
            return response.data
        } catch (error:any) {
            throw new BaseError({message: error.response.data})
        }
    }

}
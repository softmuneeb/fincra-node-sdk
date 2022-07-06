import { FincraCore } from '../../api';
import { BaseError, IEnvironment } from '../../utils';
import {
  FetchCollectionVirtualAccountDto,
  ListCollectionMainVirtualAccountDto,
  PayWithTransferDto,
} from './dto';

/**
 * The Collection module for handling the collection related operations.
 * @class Collection
 * @extends FincraCore
 * @param {string} publicKey - The public key of the merchant
 * @param {string} secretKey - The secret key of the merchant
 * @param {IEnvironment} environment - The environment of the merchant
 **/
export class Collection extends FincraCore {
  constructor(
    publicKey: string,
    secretKey: string,
    environment?: IEnvironment
  ) {
    super(publicKey, secretKey, environment);
  }
  /**
   * this method creates a temporary virtual account that can be used to receive funds over a time period
   * @param {PayWithTransferDto} data - the data to be sent to the server
   * @returns a virtual account object
   */
  public async payWithTransfer(data: PayWithTransferDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.post(
        `/profile/virtual-accounts/transfer`,
        data
      );
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  /**
   * this methods returns a single or multiple collection of a main virtual account
   * @param {ListCollectionMainVirtualAccountDto} data - the data to be sent to the server
   * @returns an array of collection objects
   */
  public async listCollectionMain(data: ListCollectionMainVirtualAccountDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(
        `/wallets/topups?business=${data.business}&reference=${data.reference}&page=${data.page}&perPage=${data.perPage}`
      );
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }
  /**
   * this method returns a single collection of an additional virtual account by its reference
   * @param {FetchCollectionVirtualAccountDto} data - the data to be sent to the server
   * @returns a collection object
   */
  public async fetchCollectionAddition(data: FetchCollectionVirtualAccountDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(
        `/collections/reference/${data.reference}?business=${data.business}`
      );
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  // TODO: List collections for additional virtual accounts
}

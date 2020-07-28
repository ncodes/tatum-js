import axios from 'axios';
import {TATUM_API_URL} from '../constants';
import {BchBlock, BchInfo, BchTx, BlockHash, TransactionHash} from '../model';

export const bcashBroadcast = async (txData: string, signatureId?: string): Promise<TransactionHash> => {
    return (await axios.post(`${process.env.TATUM_API_URL || TATUM_API_URL}/v3/bcash/broadcast`,
        {txData, signatureId},
        {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

export const bcashGetCurrentBlock = async (): Promise<BchInfo> => {
    return (await axios.get(`${process.env.TATUM_API_URL || TATUM_API_URL}/v3/bcash/info`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

export const bcashGetBlock = async (hash: string): Promise<BchBlock> => {
    return (await axios.get(`${process.env.TATUM_API_URL || TATUM_API_URL}/v3/bcash/block/${hash}`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

export const bcashGetBlockHash = async (i: number): Promise<BlockHash> => {
    return (await axios.get(`${process.env.TATUM_API_URL || TATUM_API_URL}/v3/bcash/block/hash/${i}`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

export const bcashGetTxForAccount = async (address: string, skip: number = 0): Promise<BchTx[]> => {
    return (await axios.get(`${process.env.TATUM_API_URL || TATUM_API_URL}
    /v3/bcash/transaction/address/${address}?skip=${skip}`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

export const bcashGetTransaction = async (hash: string): Promise<BchTx> => {
    return (await axios.get(`${process.env.TATUM_API_URL || TATUM_API_URL}/v3/bcash/transaction/${hash}`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};
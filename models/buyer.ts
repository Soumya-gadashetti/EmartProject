import { Address } from './address';
import { Users } from './users';

export class Buyer extends Users {
    public firstName:string;
    public lastName:string;
    public emailId:string;
    public mobileNumber:string;
    public address:Address;
}

import { Address } from './address';
import { Users } from './users';

export class Seller extends Users {
    public firstName:string;
    public lastName:string;
    public companyName:string;
    public companyDescription:string;
    public address:Address;
    public website:string;
    public emailId:string;
    public phone:string;

}

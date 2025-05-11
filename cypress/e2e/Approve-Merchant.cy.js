import { MerchantRegisration } from "../support/MerchantRegistration";
import { Login } from "../support/Login";
import { ApproveMerchant } from "../support/ApproveMerchant";

describe ('Approve New Merchant by Operation', () => {

    const merchantregistration = new MerchantRegisration();
    const login = new Login();
    const approvemerchant = new ApproveMerchant();

    it ('Approve the New Merchant' ,() => {

        merchantregistration.merchantregistration();
        login.loginAsOperation();
        approvemerchant.approvemerchant();
    })
})
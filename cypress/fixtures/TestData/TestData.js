const { faker } = require('@faker-js/faker');

const productName = `${faker.string.alpha(4)} ${faker.string.alpha(4)}`;
const productSKU = faker.string.uuid();
const Quantity = '100';
const Weight = '1.5';
const Price = '1000';
const Description = 'This is a great product.';
const UgandaNumber = '76' + faker.number.int({ min: 1000000, max: 9999999 });
const otp = '1111';
const RegistartionEmail = faker.internet.email();
const RegistrationPassword = 'P@ssword' + faker.number.int();
const BusinessName = faker.company.name();


module.exports = {
  productName,
  productSKU,
  Quantity,
  Weight,
  Price,
  Description,
  UgandaNumber,
  otp,
  RegistrationPassword,
  RegistartionEmail,
  BusinessName
};

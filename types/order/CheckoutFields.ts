export default interface TCheckoutField {
	firstName: string,
    lastName: string,
    companyName: string,
    streetAddress: string,
    optionalInfo: string,
    city: string,
    state: string,
    country: string,
    zipCode: number | string,
    email: string,
    phone: string | string,
}

import { MCFormDataType } from "./types";

export const defaultMCFormData: MCFormDataType = {
    category: "",
    location: "",
    property: "",
    detailedType: "",
    livingSpaceSize: "",
    locatedAreaSize: "",
    roomCount: "",
    builtYear: "",
    rentedStatus: "",
    qualityStandard: "",
    timeline: "",
    user: {
        gender: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        postalCode: "",
        city: "",
        street: "",
        houseNumber: "",
    },
    appointment: {
        type: "",
        date: "",
        time: "",
    },
    reasonForSale: "",
    netRent: "",
}
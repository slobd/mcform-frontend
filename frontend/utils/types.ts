export type OptionType = {
    value: string;
    label: string;
}

export type CardButtonType = {
    value: string,
    icon: string,
    text: string,
}

export type MCFormPropsType = {
    MCFormData: MCFormDataType,
    setMCFormData: (e: any) => void,
    backToPrevious: () => void,
    continueToNext: () => void,
}

export type UserType = {
    gender: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    postalCode: string,
    city: string,
    street: string,
    houseNumber: string,
}

export type AppointmentType = {
    type: string,
    date: string,
    time: string,
}

export type MCFormDataType = {
    category: string,
    location: string,
    property: string,
    detailedType: string,
    livingSpaceSize: string,
    locatedAreaSize: string,
    roomCount: string,
    builtYear: string,
    rentedStatus: string,
    qualityStandard: string,
    timeline: string,
    user: UserType,
    appointment: AppointmentType,
    reasonForSale: string,
    netRent: string,
}
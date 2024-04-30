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

export type MCFormDataType = {
    type: string,
    zipCode: string,
}
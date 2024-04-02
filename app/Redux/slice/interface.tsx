export interface RootState {
    asset: {
        products: string[],
        sl_Assest: "",
        item_name: "",
        price: "",
        taxrate:"",
        sku:"",
        m_unit: "",
        currency: "",
        description: "",
        loading: boolean,
        submit: boolean
        id: ""
        deactivate: boolean,
    }
}
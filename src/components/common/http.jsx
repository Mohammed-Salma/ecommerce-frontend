export const apiUrl = 'http://localhost:8000/api'

export const adminToken = () => {
    const data = JSON.parse(localStorage.getItem('adminInfo'))
    return data.token;

}
export const userToken = () => {
    const data = JSON.parse(localStorage.getItem('userInfo'))
    return data.token;
}

export const STRIPE_PUBLIC_KEY = 'pk_test_51UVIRSLUUQRYyt1ziYTH16O7s8Ky6QN3rimubpQFH20YltM2HlxO78j55OVB5Xhl0aMfmZG3mDcV09DvarsqfyPz00LDiVKdgY'
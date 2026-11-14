import { TokenResponse } from "./types"

const TOKEN_URL= "https://api.intra.42.fr/oauth/token"

export async function getToken(): Promise<TokenResponse> {

    const key = process.env.EXPO_PUBLIC_CLIENT_ID
    const secret = process.env.EXPO_PUBLIC_CLIENT_SECRET


    const response = await fetch(TOKEN_URL, {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    const data = await response.json()

    console.log(JSON.stringify(data, null, 2))

    return data as TokenResponse

}

// export async function getUser(login: string) {

//     const token = await getToken();

//     const response = await()

// }

// function getUser() {
//     // Function call to retrieve a user
//     // ....{login=""}
//     // Save the information of a user to create types 
// }

// // Call the API
// // This is a POST request, because we need the API to generate a new token for us
// fetch('https://api.petfinder.com/v2/oauth2/token', {
// 	method: 'POST',
// 	body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
// 	headers: {
// 		'Content-Type': 'application/x-www-form-urlencoded'
// 	}
// });
import {expect, test} from '@playwright/test'

test('Verify api', async ({request}) => {
    let response = await request.get("https://jsonplaceholder.typicode.com/users")

    //extract response data
    const responseJS = await response.json()
    const status =  response.status()
    const firstPost = responseJS[0]
    let index = Math.floor(Math.random() * responseJS.length)

    //Verify
    expect(status).toBe(200)
    const {id,name,username,email,website} = firstPost
    expect(id).toBe(1)
    expect(name).toBe("Leanne Graham")
    expect(username).toBe("Bret")
    expect(email).toBeTruthy()
    expect(firstPost.address.street).toBe("Kulas Light")
    expect(responseJS[index]).toBeTruthy();
    
});
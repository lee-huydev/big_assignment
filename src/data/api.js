

export const getApi = async (api)=> {
   try {
        const res = await fetch(api)
        if(res.ok) {
            return await res.json()
        }
        throw new Error('Wrong with somethings status ' + res.status)
   }
   catch(e) {
       console.log(e.message)
   }
}
export const delApi = async(api, id) => {
    const options = {
        method: 'DELETE',
        headers: {
           'Content-Type': 'application/json',
        },
     };
     await fetch(api + '/' + id, options)
}
export const postApi = async(api, data) => {
    const options = {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }
    await fetch(api, options)
}
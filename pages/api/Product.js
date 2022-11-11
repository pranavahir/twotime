import axios from "axios";
export async function GetSingleProduct(){
    const data = {
        productid:"636e801344c9201accf12049"
    }
    const promise =  axios.post("http://localhost:4000/singleproduct",data)
      const responsedata = promise.then(response => {
        return response.data
      })
      return responsedata
}
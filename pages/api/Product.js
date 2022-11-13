import axios from "axios";
export async function GetSingleProduct(productid){
    const data = {
        productid:productid
    }
    console.log(data,"datadata")
    const promise =  axios.post("http://localhost:4000/singleproduct",data)
      const responsedata = promise.then(response => {
        return response.data
      })
      return responsedata
}
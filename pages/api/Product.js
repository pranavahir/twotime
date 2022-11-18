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
export async function ListOfProducts(query){
  const data = {}
  if(query.products === "search"){
    data.searchfield = query.keyword
  }else if(query.products === "categories"){
    data.category = query.category
  }  
  console.log(data,"datadata")
  const promise =  axios.post("http://localhost:4000/listofproducts",data)
    const responsedata = promise.then(response => {
      return response.data
    })
    return responsedata
}
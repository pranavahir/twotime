import axios from "axios";
export async function GetSingleProduct(productid){
    const data = {
        productid:productid,
        tocountry:"India"
    }
    console.log(data,"datadata")
    const promise =  axios.post("https://www.junkyscrap.com/server/singleproduct",data)
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
  const promise =  axios.post("https://www.junkyscrap.com/server/listofproducts",data)
    const responsedata = promise.then(response => {
      return response.data
    })
    return responsedata
}
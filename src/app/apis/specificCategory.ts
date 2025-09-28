export default async function GetSpecificCategory() {
    const response = await fetch("https://ecommerce.routemisr.com/api/v1/subcategories")
    const { data } = await response.json()
    
    return  data

}
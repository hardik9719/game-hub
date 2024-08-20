import noImage from '../assets/OIP.jpg'
const getImageUrl = (url?:string)=>{
    if(!url)return noImage;
    return"https://"+url;
}
export default getImageUrl;
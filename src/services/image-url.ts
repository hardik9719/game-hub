import noImage from '../assets/OIP.jpg'
const getImageUrl = (url?:string)=>{
    if(!url)return noImage;
    url = url.replace('t_thumb','t_screenshot_med')
    // https://images.igdb.com/igdb/image/upload/t_screenshot_med/co3pmc.jpg
    return"https://"+url;
}
export default getImageUrl;
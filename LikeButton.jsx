function LikeButton()
{
    let[isliked,setisliked]=usestate(true)
    function changecolor()
    {
        setisliked((isliked)=>{
            return !isliked
        })
    }
    if(isliked)
    {
        return(
            <span onClick={changeColor}><i class="fa-regular fa-heart"></i></span>
        )
    }
    else{
        return(
            <span onClick={changeColor}><i class="fa-solid fa-heart"></i></span>
        )
    }
}
export default LikeButton

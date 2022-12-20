function BottomBar({image, title, author}){
  return(
    <div className="h-[220px]">
      <span className="flex">
      <img src={image} alt="No Image" />
      <div className="flex">
        {title}
        <span>by {author}</span>
        </div>
      </span>
      </div>
  )
}

export default BottomBar;
function BookGrid(){
  return(
    <div className="flex grid grid-rows-4 grid-flow-col gap-16 p-5">
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay"/>
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay"/>
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay"/>
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay"/>
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay"/>
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay"/>
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay"/>
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay"/>
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay"/>
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay"/>
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay"/>
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay"/>
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay"/>
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay"/>
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay"/>
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay"/>
    </div>
  )
}

function BookCard({image, title, author}){
  return(
    <div className="h-40 w-40">
      <img src={image} alt="No Image"/>
      <div className="p-2">
        {title}
        by {author}
        </div>
    </div>
  )
}

export default BookGrid;
// import Search from '@mui/icons-material/Search'
import EqualizerIcon from '@mui/icons-material/Equalizer';

function MainArea() {
  return(
    <div className="h">
    <span className="flex px-20">
      <div>
        <ActiveBookSection/>
      </div>
      <div>
        <BookGrid/>
      </div>
    </span>
    </div>
  )
}

function BookGrid() {
  return (
    <div className="flex px-20 overflow-scroll grid grid-flow-rows grid-cols-4 gap-x-4 gap-y-12">
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <BookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
    </div>
  )
}

function ActiveBookSection(){
  return(
    <div>
      <LargeBookCard image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg" title="The Night Shift" author="Alex Finlay" />
      <TracksBookmarks/>
      </div>
  )
}

function LargeBookCard({ image, title, author }) {
  return (
    <div className="w-96">
      <img src={image} alt="No Image" />
      <div className="p-4 bg-gray-900 text-gray-300">
        <span className="flex">
          <div className="pr-52">
          {title}
          <div>by {author}</div>
          </div>
          <EqualizerIcon/>
        </span>
      </div>
    </div>
  )
}

function TracksBookmarks(){
  
  return(
    <div className=" py-8 bg-gray-900 text-white">
      <ul className="flex text-white">
      <li className="border-r-2 border-x-gray-700 px-14 py-2">
        <span className="hover:border-b-2 hover:border-y-green-400 hover:pb-1">
          Audiobooks
        </span>
      </li>
      <li className="border-r-2 border-x-gray-600 px-14 py-2">
        <span className="hover:border-b-2 hover:border-y-green-400 hover:pb-1">
          E-Books
        </span>
      </li>
      </ul>
      <div>
        <TrackList/>
      </div>
    </div>
  )
}

function TrackList(){

   const tracks = [
  { title: "Track 1", time: "3:42" },
  { title: "Track 2", time: "5:20" },
  { title: "Track 3", time: "6:32" },
  { title: "Track 4", time: "4:15" },
  { title: "Track 5", time: "8:55" },
  { title: "Track 6", time: "6:48" },
  { title: "Track 7", time: "9:42" },
  { title: "Track 8", time: "4:56" },
  { title: "Track 9", time: "7:22" },
  { title: "Track 10", time: "10:43" },
  { title: "Track 11", time: "12:22" },
  { title: "Track 12", time: "7:25" },
  { title: "Track 13", time: "8:14" },
  { title: "Track 14", time: "9:33" },
  { title: "Track 15", time: "6:45" },
  { title: "Track 16", time: "7:34" },
  { title: "Track 17", time: "2:55" }
];



// const tracklist = () => {
//   return (
//     <>
//       {tracks.map(({ title, time }) => (
//         <ul>
//           <li>
//             {title}
//             {time}
//           </li>
//         </ul>
//       ))}
//     </>
//   );
// };

  return(
      <>
        {tracks.map(({ title, time }) => (
          <ul>
            <li>
              <span className="flex p-3  border-b border-gray-700">
                <div className="pl-5 pr-56">{title}</div>
                <div>{time}</div>
              </span>
            </li>
          </ul>
        ))}
      </>
    )
}

function BookCard({ image, title, author }) {
  return (
    <div className="h-60 w-52">
      <img src={image} alt="No Image" />
      <div className="p-2 bg-gray-900 text-gray-300">
        {title}
        <div>by {author}</div>
      </div>
    </div>
  )
}

export default MainArea;
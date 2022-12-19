// import Search from '@mui/icons-material/Search'
import EqualizerIcon from '@mui/icons-material/Equalizer';

function MainArea() {
  return(
    <div>
    <span className="flex pl-20">
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
    <div className="flex h-[1000px] pl-16 pr-8 overflow-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 grid grid-flow-rows grid-cols-4 gap-x-4 gap-y-12">
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
      <div className="py-8">
        <TracksBookmarks/>
      </div>
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
    <div className="py-6 bg-gray-900 text-white">
      <ul className="flex text-white font-bold text-lg">
      <li className="px-14 py-2 hover:border-b-2 hover:border-y-blue-400 hover:pb-1">
        <span className="">
          Audiobooks
        </span>
      </li>
      <li className="hover:border-b-2 hover:border-y-blue-600 hover:pb-1 px-14 py-2">
        <span>
          E-Books
        </span>
      </li>
      </ul>
      <div className="overflow-auto h-96">
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
    <div className="h-[270px] w-[235px]">
      <img src={image} alt="No Image" />
      <div className="p-2 bg-gray-900 text-gray-300">
        {title}
        <div>by {author}</div>
      </div>
    </div>
  )
}

export default MainArea;
// import Search from '@mui/icons-material/Search'
import EqualizerIcon from '@mui/icons-material/Equalizer';
import Circle from '@mui/icons-material/Circle'
import { useNavigate } from "react-router-dom";


function MainArea() {
  return(
    <div>
    <span className="flex pt-5 pl-20">
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
    <div className="flex h-[1000px] pl-16 pr-8 overflow-scroll scrollbar scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-700 grid grid-flow-rows grid-cols-4 gap-x-4 gap-y-4">
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
    <div className="pb-[11px]">
      <img src={image} alt="No Image" className="rounded-t-md"/>
      <div className="p-4 bg-gray-900 text-gray-200 rounded-b-md">
        <span className="flex">
          <div className="pr-52">
          {title}
          <div className="text-gray-400">by {author}</div>
          </div>
          <div className="pt-2.5">
          <EqualizerIcon className="text-lg"/>
          </div>
        </span>
      </div>
    </div>
  )
}

function TracksBookmarks(){
  
  return(
    <div className="py-6 bg-gray-900 text-white pr-2 rounded-md">
      <ul className="flex justify-between text-white font-bold text-lg">
      <li className="py-2 px-12 hover:border-b-2 hover:border-y-blue-600 hover:pb-1">
        <span className="">
          Audiobooks
        </span>
      </li>
      <li className="hover:border-b-2 hover:border-y-blue-600 hover:pb-1 py-2 px-14">
        <span>
          E-Books
        </span>
      </li>
      </ul>
      <div className="overflow-auto pr-5 scrollbar scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-900 h-96">
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

  return(
      <>
        {tracks.map(({ title, time }) => (
          <ul>
            <li>
              <div className="pl-5">
              <span className="flex border-b">
                <span className="flex pt-[8px] pb-[4.5px] w-[338px] border-gray-700 justify-between">
                <div>{title}</div>
                <div>{time}</div>
                </span>
                <div className="h-[15px] w-[15px] pl-[7px] text-green-400 text-3xl">
                  &#183;
                </div>
              </span>
              </div>
            </li>
          </ul>
        ))}
      </>
    )
}

function BookCard({ image, title, author }) {
  
    const navigate = useNavigate();
  
    function handleClick() {
      navigate("/BookAbout");
    }
  
  return (
      <div onClick={handleClick} className=" w-[275px]">
        <img src={image} alt="No Image" className="rounded-t"/>
        <div className="p-3 bg-gray-900 text-gray-200 rounded-b">
          {title}
          <div className="text-gray-400 ">by {author}</div>
        </div>
      </div>
  )
}

export default MainArea;
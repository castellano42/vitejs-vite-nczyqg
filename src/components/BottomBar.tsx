import Bookmark from "@mui/icons-material/Bookmark";
import Airplay from "@mui/icons-material/Airplay";
import Speed from "@mui/icons-material/Speed";
import Snooze from "@mui/icons-material/Snooze";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';


function BottomBar({image, title, author}){
  return(
    <div className="h-[220px]">
      <span className="flex justify-between pr-20">
      <img src={image} alt="No Image" className="h-[220px]" />
      <BottomControls/>
      </span>
      </div>
  )
}

function BottomControls(){
  return(
      <div className="w-[270px] justify-between pt-20">
        <span className="flex pr-[148px] w-[375px] pb-2 text-white justify-between">
          <Bookmark/>
          <Airplay/>
          <Speed/>
          <Snooze/>
        </span>
        <span className="flex text-white justify-between w-[270px]">
          <div className="pl-1 pt-[9px]">
            <div className="w-[224px] bg-gray-200 rounded-full h-1 dark:bg-gray-300">
              <div className="bg-blue-400 h-1 rounded-full w-[130px]"></div>
            </div>
          </div>
          <VolumeUpIcon/>
      </span>
  </div>
  )
}

export default BottomBar;
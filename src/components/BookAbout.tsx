import PlayCircleOutline from '@mui/icons-material/PlayCircleOutline';

function BookAbout() {
  return (
    <div className="bg-gray-700 overflow-auto h-screen">
      <MainBookSection image="https://dsxuu8etcj8kw.cloudfront.net/d/u/du79/du79-square-400.jpg" title="Green Lights" author="Matthew McConaughey" />
      <div>
        <BookInfoSection />
      </div>
    </div>

  )
}


function MainBookSection({ image, title, author }) {
  return (
    <div className="pt-[15px]">
      <div className="pl-[490px]">
        <TitleSection title={title} author={author} />
        <hr className="w-[767px]" />
      </div>
      <span className="flex">
        <div className="text-white text-sm pl-[492px] pt-[50px] pb-[95px]">
          <img src={image} alt="No Image" className="rounded h-[400px]" />
          <div className="pl-[140px] pt-[10px]">
            <PlayCircleOutline /> Play Sample
          </div>
        </div>
        <RightSideBookSection />
      </span>
    </div>
  )
}


function TitleSection({ title, author }) {
  return (
    <div className="pr-[730px] pb-[15px] text-center text-white justify-center">
      <div className="text-4xl">
        {title}
      </div>
      <div className="text-2xl text-gray-400">
        By {author}
      </div>
      <div className="text-lg text-gray-400">
        Read By Matthew McConaughey
      </div>
    </div>
  )
}

function RightSideBookSection() {
  return (
    <div className="pt-[45px] pl-[75px] text-white">
      Format
      <div className="text-gray-800 pt-[8px] pb-[35px]">
        <select className="rounded text-white bg-gray-500 w-[290px] h-[42px]" name="product" id="books">
          <option value="download">Digital Audiobook</option>
          <option value="rental">Rental</option>
          <option value="ebook">E-Book</option>
        </select>
      </div>
      <div className="text-center text-white rounded-full h-[40px] bg-gradient-to-r from-cyan-400 to-green-400 w-[290px]">
        <div className="pt-[6px]">
          Play Now <PlayCircleOutline />
        </div>
      </div>
    </div>
  )
}

function BookInfoSection() {
  return (
    <div className="bg-gray-600 h-max pb-[200px]">
      <div className="pl-[480px] pt-[20px] justify-center">
        <BasicInfo />
        <hr className="w-[930px]" />
        <OverviewSection />
      </div>
    </div>
  )
}

function BasicInfo() {
  return (
    <span className="flex text-white w-[600px] justify-between pb-[10px]">
      <div className="text-center text-lf">
        Runtime
        <div className="text-xs text-gray-400">6h 34m</div>
      </div>
      <div className="text-center text-lg">
        Release Date
        <div className="text-xs text-gray-400">03-07-20</div>
      </div>
      <div className="text-center text-lg">
        Abridgment
        <div className="text-xs text-gray-400">Unabridged</div>
      </div>
      <div className="text-center text-lg">
        Genre
        <div className="text-xs text-gray-400">Nonfiction</div>
      </div>
    </span>
  )
}

function OverviewSection() {
  return (
    <span className="flex pt-[30px]">
      <div className="text-xl text-white font-bold pt-[0px]">
        Overview
        <p className="text-base w-[480px] font-light leading-relaxed mt-0 mb-4 text-white pt-[20px] pr-[30px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no
          sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no
          sea takimata sanctus est Lorem ipsum dolor sit amet.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no
          sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no
          sea takimata sanctus est Lorem ipsum dolor sit amet.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no
          sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no
          sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no
          sea takimata sanctus est Lorem ipsum dolor sit amet.

        </p>
      </div>
      <hr className="" />
      <Bios />
    </span>
  )
}

function Bios() {
  return (
    <div className="border-l">
      <div className="pl-[45px] text-xl text-white font-bold">
        <div className="pl-[140px]">
          <div className="w-28 h-28 bg-white rounded-full"></div>
          <div className="pt-[25px]">Author Bio</div>
        </div>
        <div>
          <p className="text-base w-[420px] font-light leading-relaxed mt-0 mb-4 text-white pt-[20px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd qubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem iosum
            dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. Lorem iosum
            dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
      </div>
      <div className="pl-[45px]  text-xl text-white font-bold pt-[18px]">
        <hr/>
      <div className="pt-[35px] pl-[140px]">
        <div className="w-28 h-28 bg-white rounded-full"></div>
        <div className="pt-[25px]">Narrator Bio</div>
        </div>
        <div>
          <p className="text-base w-[420px] font-light leading-relaxed mt-0 mb-4 text-white pt-[20px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd qubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem iosum
            dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. Lorem iosum
            dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BookAbout;
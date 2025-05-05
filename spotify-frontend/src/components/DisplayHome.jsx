import { useContext } from "react"
import AlbumItem from "./AlbumItem"
import Navbar from "./Navbar"
import SongsItem from "./SongsItem"
import { PlayerContext } from './../context/PlayerContext';
import './Display.css'

function DisplayHome() {
    const { songsData, albumsData } = useContext(PlayerContext)
    return (
        <>
            <Navbar />
            <div className="display-total">
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Popular Albums </h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (<AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item._id} />))}
                </div>
            </div>

            <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl"> Popular Artists</h1>
            <div className="flex overflow-auto songs-container">
                <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
                    <img src="https://i.scdn.co/image/ab6761610000e5ebb19af0ea736c6228d6eb539c" alt="Circle Image" className="w-40 h-40 rounded-full object-cover" />
                    <p className="font-bold mt-2 mb-1">AR Rahman</p>
                    <p className="text-slate-200 text-sm">Artist</p>
                </div>
                <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
                    <img src="https://static.toiimg.com/thumb/imgsize-23456,msid-83402681,width-600,resizemode-4/83402681.jpg" alt="Circle Image" className="w-40 h-40 rounded-full object-cover" />
                    <p className="font-bold mt-2 mb-1">Pritam</p>
                    <p className="text-slate-200 text-sm">Artist</p>
                </div>
                <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
                    <img src="https://actressalbum.com/wp-content/uploads/2017/08/actressalbum.com_beautiful-telugu-singer-sunitha-latest-stills-in-white-saree.2.jpg" alt="Circle Image" className="w-40 h-40 rounded-full object-cover" />
                    <p className="font-bold mt-2 mb-1">Sunitha</p>
                    <p className="text-slate-200 text-sm">Artist</p>
                </div>
                <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
                    <img src="https://www.filmfare.com/awards/filmfare-awards-south-2018/images/nominations/l-v-revanth.jpg?v=0.01" alt="Circle Image" className="w-40 h-40 rounded-full object-cover" />
                    <p className="font-bold mt-2 mb-1">Revanth</p>
                    <p className="text-slate-200 text-sm">Artist</p>
                </div>
                <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
                    <img src="https://thetelugufilmnagar.com/wp-content/uploads/2018/12/Sid-Sriram.jpg" alt="Circle Image" className="w-40 h-40 rounded-full object-cover" />
                    <p className="font-bold mt-2 mb-1">Sid Sriram</p>
                    <p className="text-slate-200 text-sm">Artist</p>
                </div>
                <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
                    <img src="https://www.okeasylife.com/wp-content/uploads/2018/11/Mounima.jpg" alt="Circle Image" className="w-40 h-40 rounded-full object-cover" />
                    <p className="font-bold mt-2 mb-1">Mounima</p>
                    <p className="text-slate-200 text-sm">Artist</p>
                </div>
                <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
                    <img src="https://2.bp.blogspot.com/-16RZs1fjEGU/UW7zoQz-jhI/AAAAAAABd2U/EksDQFwTgvs/s1600/Singer_Geetha-Madhuri-WallPapers_3.jpg" alt="Circle Image" className="w-40 h-40 rounded-full object-cover" />
                    <p className="font-bold mt-2 mb-1">Geetha Madhuri</p>
                    <p className="text-slate-200 text-sm">Artist</p>
                </div>
            </div>
           </div>



                
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Today&apos;s biggest hits</h1>
                <div className="flex overflow-auto songs-container" >
                    {songsData.map((item, index) => (<SongsItem key={index} image={item.image} name={item.name} desc={item.desc} id={item._id} />))}
                </div>
            </div>
            <div className="footer-section">
               <div>
                  <h2> Company</h2>
                  <h3> Jobs </h3>
                  <h3> About </h3>
                  <h3> For the Road </h3>
               </div>
               <div>
                  <h2> Communities</h2>
                  <h3> For Artists </h3>
                  <h3> Developers  </h3>
                  <h3> Advertising</h3>
                  <h3> Investors </h3>
                  <h3>Vendors</h3>
               </div>

               </div>
               <hr className="hr-line" />
               <h1 className="pt-5"> @2025 Nagasai SS</h1>
            </div>
        </>
    )
}

export default DisplayHome

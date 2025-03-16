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
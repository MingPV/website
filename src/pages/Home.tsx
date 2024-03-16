
import Navbar from "../components/NavbarHome"
import HomeAboutMe from "../components/HomeAboutMe"
import HomePicture from "../components/HomePicture"


function Home() {

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="Homebody">
                <div style={{ paddingTop: 230, paddingLeft: 180 }}><HomeAboutMe /></div>
                <div style={{ paddingLeft: 130, paddingTop: 100 }}><HomePicture /></div>
            </div>
        </>
    )
}

export default Home

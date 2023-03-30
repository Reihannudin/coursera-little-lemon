import {NavbarComponent} from "../Component/Navbar.Component";
import {BannerSectionComponent} from "../Component/BannerSection.Component";
import {SpecialComponent} from "../Component/Special.Component";
import {CopywriteComponent} from "../Component/Copywrite.Component";
import {FooterComponent} from "../Component/Footer.Component";

function Home(){
    return(
        <>
            <NavbarComponent />
            <div style={{ fontFamily : "Karla sans-serif"}}>
                <BannerSectionComponent />
                <SpecialComponent />
                <CopywriteComponent />
            </div>
            <FooterComponent />
        </>
    )
}

export default Home
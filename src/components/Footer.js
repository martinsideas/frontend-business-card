import tw from '../assets/icons/twitter1.png'
import ig from '../assets/icons/instagram1.png'
import gh from '../assets/icons/github1.png'

export default function Footer(){
    return (
<>
        <footer className="footer">
            <img className="tw-ic" src={tw} alt="Twitter Profile" />
            <img className="ig-ic" src={ig} alt="Instagram Profile" />
            <img className="gh-ic" src={gh} alt="Github Profile" />
        </footer>
</>
    )
}
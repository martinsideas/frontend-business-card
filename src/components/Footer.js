import tw from '../assets/icons/twitter1.png'
import ig from '../assets/icons/instagram1.png'
import gh from '../assets/icons/github1.png'

export default function Footer(){
    return (
<>
        <footer className="footer">
            <a href="https://twitter.com/martinsideas" target="_blank" rel="noopener noreferrer">
                <img className="tw-ic" src={tw} alt="Twitter Profile" />
            </a>
            <a href="http://instagram.com/martinsideas" target="_blank" rel="noopener noreferrer">
                <img className="ig-ic" src={ig} alt="Instagram Profile" />
            </a>
            <a href="http://github.com/martinsideas" target="_blank" rel="noopener noreferrer">
                <img className="gh-ic" src={gh} alt="Github Profile" />
            </a>
        </footer>
</>
    )
}
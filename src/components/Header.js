import photo from '../assets/images/profile.jpg'
import gh from '../assets/icons/github1.png'

export default function Header(){
    return (
<>
        <header className="header">
            <img className="profile_photo" src={photo} alt="Profile" />
            <p className="name">Martin Alvarez</p>
            <a className="website" href="https://martinsideas.hashnode.dev" target="_blank" rel="noopener noreferrer">martinsideas.hashnode.dev/</a>
            <button className="github-btn"> 
                    <span><img className="gh-ic-btn" src={gh} alt="Github icon"/></span>Github
            </button>
        </header>
</>
    )
}
import photo from '../assets/images/profile.jpg'
import gh from '../assets/icons/github1.png'

export default function Header(){
    return (
<>
        <header className="header">
            <form action="https://github.com/martinsideas" target="_blank">
                <img className="profile_photo" src={photo} alt="Profile" />
                <p className="name">Martin Alvarez</p>
                <p className="role">Frontend Developer</p>
                <a className="website" href="https://martinsideas.hashnode.dev" target="_blank" rel="noopener noreferrer">martinsideas.hashnode.dev</a>
                <button type="submit" id="github-button" className="github-btn">
                        <div className="btn-text">
                            <span><img className="gh-ic-btn" src={gh} alt="Github icon"/></span>
                            <p>Github</p>
                        </div>
                </button>
            </form>
        </header>
</>
    )
}
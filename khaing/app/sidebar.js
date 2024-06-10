const Sidebar = () => {
    return (
        <div className="sidebar">
            <a id="profilePic" href="/info"><img src="/profile.png" alt="Khaing" /></a>
            <ul>
                <li><a href="info">Khaing Hsu Wai</a></li>
                <li><a href="achievements">Research Achievements</a></li>
                <li><a href="awards">Honors and Awards</a></li>
                <li><a href="experience">Professional Experience</a></li>
                <li><a href="gallery">My Gallery</a></li>
            </ul>
        </div>
    )
}

export default Sidebar;
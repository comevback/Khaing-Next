const Info = () => {
    return (
        <div className="info">
            <section className="basicInfo">
                <h1 className="name">Khaing Hsu Wai (ခိုင်ဆုဝေ) (カイン)</h1>
                <p>
                    {`Hello! I am Khaing Hsu Wai (カイン), a silly but hardworking Ph.D candidate at`}
                    <a href="https://www.okayama-u.ac.jp" target="_blank" rel="noopener noreferrer"> Okayama University </a> 
                    {`under`}
                    <a href="https://www.cc.okayama-u.ac.jp/~eng_dist/index_eng.html" target="_blank" rel="noopener noreferrer"> Funabiki Lab </a>.
                    {`I am also a member of Language Understanding (LU) Lab under`}
                    <a href="https://sites.google.com/site/yekyawthunlp/" target="_blank" rel="noopener noreferrer"> Prof. Ye </a>.
                </p>
                <p>
                    {`Currently, my research is focused on Programming Learning Assistant System,
                    to support the programming education for the novice students and creative text generation for low-resource languages.
                    My research interests focus on:`}
                </p>
                <ul>
                    <li>Educational Technology</li>
                    <li>Machine Learning</li>
                    <li>Natural Language Processing</li>
                </ul>
                <p>
                    {`You can have a look at my research publication`}
                    <a href="achievements"> here </a>.
                    {`If you are interested in discussing research collaborations or need some guidance, please feel free to contact me. I am always ready to help.
                    I like to do volunteer works to support every community. I also like traveling and seeking new adventures. One big dream of mine is to see the northern lights!`}
                </p>
                <p>
                    {`My life quote is "Be Free. Be True. Be You!".`}
                </p>
            </section>

            <section id="education">
                <h2 className="subtitle">Education</h2>
                <hr />
                <div className="education-content">
                    <p className="school">University of Computer Studies, Mandalay</p>
                    <p className="major">Bachelor of Computer Science</p>
                    <p className="date">2018 - 2022</p>
                </div>
            </section>

            <section id="languages">
                <h2 className="subtitle">Language Proficiency</h2>
                <hr />
                <p>Myanmar - Native</p>
                <p>English - Fluent</p>
                <p>Japanese - Fair (JLPT N3)</p>
            </section>
        </div>
    );
}

export default Info;

const Info = () => {
    return (
        <div>
            <section className="basic-info">
            <span className="info-content"> 
                <h1>Khaing Hsu Wai ခိုင်ဆုဝေ</h1>
                Hello! I am Khaing Hsu Wai (カイン), a silly but hardworking Ph.D candidate at <a href="https://www.okayama-u.ac.jp" target="_blank" rel="noopener noreferrer">Okayama University</a> under <a href="https://www.cc.okayama-u.ac.jp/~eng_dist/index_eng.html" target="_blank" rel="noopener noreferrer">Funabiki Lab</a>. 
                I am also a member of Language Understanding (LU) Lab under <a href="https://sites.google.com/site/yekyawthunlp/" target="_blank" rel="noopener noreferrer">Prof. Ye</a>.
                <p>
                    My life quote is "Be Free. Be True. Be You!"
                </p>
            </span>

            <span className="info-content">
                <p> 
                    Currently, my research is focused on Programming Learning Assistant System, 
                    to support the programming education for the novice students and  creative text generation for low-resource languages.
                    </p>
    
                    <h3>
                    My research interests focus on 
                    </h3>
                    
                    <ul>
                        <li>Educational Technology</li>
                        <li>Machine Learning</li>
                        <li>Natural Language Processing</li>
                    </ul>
                    You can have a look at my research publication in <a href="achievements">here</a>. 
    
            </span> 

            <span className="info-content">
                <p>
                If you are interested in discussing research collaborations or need some guidance, please feel free to contact me. I am always ready to help.
                I like to do volunteer works to support every community. I also like traveling and seeking new adventures. One big dream of mine is to see the northern lights!
                </p>
            </span>
            </section>

            <section id="education">
                <h2>Education</h2>
                <div className="education-content">
                    <h3>University of Computer Studies, Mandalay</h3>
                    <p>Bachelor of Computer Science</p>
                    <p>2018 - 2022</p>
                </div>
            </section>

            <section id="languages">
                <h2>Language Proficiency</h2>
                <p>Myanmar - Native</p>
                <p>English - Fluent</p>
                <p>Japanese - Fair (JLPT N3)</p>
            </section>
        </div>
        
    );
}

export default Info;
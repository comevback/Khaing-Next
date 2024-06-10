import Image from "next/image";
import Sidebar from "./sidebar";
import Info from "./info/page";
import Layout from "./layout";

export default function Home() {
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
                  My research interests focus on: Educational Technology, Natural Language Processing, and Machine Learning.`}
        </p>
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
          <p className="major">Doctor of Philosophy in Engineering</p>
          <p className="school">Graduate School of Natural Science and Technology, Okayama University</p>
          <p className="date">2021/10 - 2024/9 (Expect)</p>
        </div>

        <div className="education-content">
          <p className="major">Master of Engineering (Information Science and Technology)</p>
          <p className="school">Faculty of Information Science and Technology, University of Technology (Yatanarpon Cyber City)</p>
          <p className="date">2017/05 - 2020/01</p>
        </div>

        <div className="education-content">
          <p className="major">Bachelor of Engineering (Information Science and Technology)</p>
          <p className="school">Faculty of Information Science and Technology, University of Technology (Yatanarpon Cyber City)</p>
          <p className="date">2011/11 - 2016/11</p>
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

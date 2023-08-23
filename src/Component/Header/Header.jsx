import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const Header = () => {
  const [modal , setModal] = useState(false)
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const writeNameText = "MD RABIYUL ISLAM ";
  useEffect(() => {
    if (currentIndex < writeNameText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentText + writeNameText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 300);
      return () => clearTimeout(timeout);
    }
  },);

  return (
    <div>
      {/* header start */}
      <header className="header" id="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="header__data">
                <div className="header__data__contents">
                  <div className="header__data__contents__top">
                    Hi My Name Is
                  </div>
                  <div className="header__data__contents__heading">{currentText}</div>
                  <div className="header__data__contents__bottom">
                    MERN Stack Developer
                  </div>
                  <div className="heaser__data__contents_link">
                    <a
                      href="./src/files/sujonCv.pdf"
                      className="btn btn-default"
                      target="_blank">
                      Download Cv
                    </a>{" "}
                    &nbsp;
                    <button onClick={()=>setModal(true)} className="btn btn-dark open__modal">
                      Hire Me
                    </button>
                   {modal && <Modal modalUpdate ={setModal}></Modal>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header end */}
    </div>
  );
};

export default Header;

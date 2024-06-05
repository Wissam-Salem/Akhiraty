import { useRef, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBookOpenReader,
  faBookQuran,
  faClose,
  faHandHoldingHeart,
  faHouse,
  faRadio,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [icon, setIcon] = useState(faBars);
  const [mobileMenuWidth, setMobileMenuWidth] = useState("fit");
  const btn = useRef(null);
  const mobileHamburgerMenu = useRef(null);
  const sora = useRef(null);

  const handleSora = () => {
    if (sora.current.hidden === true) {
      sora.current.hidden = false;
    } else {
      sora.current.hidden = true;
    }
  };
  const handleMobileMenu = () => {
    if (mobileHamburgerMenu.current.hidden === true) {
      setIcon(faClose);
      setMobileMenuWidth("full");
      mobileHamburgerMenu.current.hidden = false;
    } else {
      setIcon(faBars);
      setMobileMenuWidth("fit");
      mobileHamburgerMenu.current.hidden = true;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full relative flex p-3">
        <div className="logo-title w-24 max-sm:w-20 flex flex-col items-center gap-2 text-3xl max-sm:text-2xl">
          <img src="../assets/logo2.png" alt="" />
          <h1>آخرتي</h1>
        </div>

        <div className="absolute right-0 m-7 p-3 block max-md:hidden">
          <ul className="flex items-center gap-8">
            <li>
              <a href="/">الرئيسية</a>
            </li>
            <li>
              <div className="dropdown" dir="rtl">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex gap-2 items-center m-1"
                >
                  السور
                  <FontAwesomeIcon icon={faSortDown} />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu my-2 p-2 bg-[#DFE0E2] ring-1 ring-green-900 shadow rounded-box w-52"
                  dir="rtl"
                >
                  <li>
                    <a href="/surahs/meccan">
                      <img
                        className="w-6"
                        src="../assets/mecca.png"
                        alt="السور المكية"
                      />
                      المكية
                    </a>
                  </li>
                  <li>
                    <a href="/surahs/madinan">
                      <img
                        className="w-6"
                        src="../assets/madina.png"
                        alt="السور المدنية"
                      />
                      المدنية
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/azkar">الأذكار</a>
            </li>
            <li>
              <a href="/reciters">إذاعة القرآن</a>
            </li>
            <li>
              <a href="/support_us">ادعمنا</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`w-${mobileMenuWidth} h-fit overflow-hidden fixed bottom-0 z-50 hidden max-md:flex flex-col items-center justify-end`}
      >
        <button
          className="btn btn-circle bg-green-900 outline-none border-none hover:bg-green-800 swap swap-rotate mb-3"
          onClick={() => {
            handleMobileMenu();
          }}
        >
          <FontAwesomeIcon icon={icon} size="lg" ref={btn} />
        </button>
        <div
          className="mobile-menu w-full h-fit p-5 bg-[#DFE0E2] ring-1 ring-green-900 rounded-t-2xl transition"
          ref={mobileHamburgerMenu}
          hidden={true}
        >
          <ul className="menu flex flex-col gap-2 " dir="rtl">
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faHouse} style={{ color: "#14532d" }} />
                الرئيسية
              </a>
            </li>
            <li
              className="relative"
              onClick={() => {
                handleSora();
              }}
            >
              <a className="relative" href="#">
                <FontAwesomeIcon
                  icon={faBookQuran}
                  style={{ color: "#14532d" }}
                />
                السور
                <FontAwesomeIcon
                  className="absolute left-5"
                  icon={faSortDown}
                />
              </a>
            </li>
            <ul ref={sora} hidden={true} className="sora mr-10 overflow-hidden">
              <li title="السور المكية">
                <a href="/surahs/meccan">
                  <img
                    className="w-6"
                    src="../assets/mecca.png"
                    alt="السور المكية"
                  />
                  المكية
                </a>
              </li>
              <li title="السور المدنية">
                <a href="/surahs/madinan">
                  <img
                    className="w-6"
                    src="../assets/madina.png"
                    alt="السور المدنية"
                  />
                  المدنية
                </a>
              </li>
            </ul>
            <li>
              <a href="/azkar">
                <FontAwesomeIcon
                  icon={faBookOpenReader}
                  style={{ color: "#14532d" }}
                />
                الأذكار
              </a>
            </li>
            <li>
              <a href="/reciters">
                <FontAwesomeIcon icon={faRadio} style={{ color: "#14532d" }} />
                إذاعة القرآن
              </a>
            </li>
            <li>
              <a href="/support_us">
                <FontAwesomeIcon
                  icon={faHandHoldingHeart}
                  style={{ color: "#14532d" }}
                />
                ادعمنا
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

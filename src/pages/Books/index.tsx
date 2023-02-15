import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { ROLES_ADMIN, ROLES_LEITOR, userRole } from "../../utils/app";
import { CardBook } from "../../components/shared/CardBook";
import b1 from "../../assets/books/b1.png";
import b2 from "../../assets/books/b2.png";
import * as BsIcons from "react-icons/bs";
import { MainContainner } from "./styles";

// import { Container } from './styles';

const Books: React.FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [data, setData] = useState([{}, {}, {}, {}]);
  const carousel: any = useRef(null);

  useEffect(() => {
    console.log(userRole());
      if(pathname ==='/books' && userRole() === ROLES_ADMIN) {
        history.push('/');
      }
      else if(pathname ==='/books' && userRole() === ROLES_LEITOR) {
        history.push('/books');
      }else{
        history.push('/login');
      }
  }, [history, pathname]);

  const handleRightClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  const handleLeftClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  //if (!data || !data.length) return null;

  return (
    <MainContainner>
      <div className="session-new-books">
        <div className="title">
          <h2>Novos</h2>
        </div>
        <div className="carousel-wrapper">
          <div className="left" onClick={handleRightClick}>
            <span>
              <BsIcons.BsArrowLeftCircle />
            </span>
          </div>
          <div className="carousel" ref={carousel}>
            {data.map((item) => (
              <>
                <CardBook img={b2} />
                <CardBook img={b1} />
                <CardBook img={b1} />
                <CardBook img={b2} />
                <CardBook img={b2} />
                <CardBook img={b2} />
              </>
            ))}
          </div>
          <div className="right" onClick={handleLeftClick}>
            <span>
              <BsIcons.BsArrowRightCircle />
            </span>
          </div>
        </div>
      </div>

      <div className="session-new-recent">
        <div className="title">
          <h2>Mais recentes </h2>
        </div>
        <div className="carousel-wrapper">
          <div className="left" onClick={handleRightClick}>
            <span>
              <BsIcons.BsArrowLeftCircle />
            </span>
          </div>
          <div className="carousel" ref={carousel}>
            {data.map((item) => (
              <>
                <CardBook img={b2} />
                <CardBook img={b1} />
                <CardBook img={b1} />
                <CardBook img={b2} />
                <CardBook img={b2} />
                <CardBook img={b2} />
              </>
            ))}
          </div>
          <div className="right" onClick={handleLeftClick}>
            <span>
              <BsIcons.BsArrowRightCircle />
            </span>
          </div>
        </div>
      </div>
      <div className="session-most-read">
        <div className="title">
          <h2>Mais Lidos </h2>
        </div>
        <div className="carousel-wrapper">
          <div className="left" onClick={handleRightClick}>
            <span>
              <BsIcons.BsArrowLeftCircle />
            </span>
          </div>
          <div className="carousel" ref={carousel}>
            {data.map((item) => (
              <>
                <CardBook img={b2} />
                <CardBook img={b1} />
                <CardBook img={b1} />
                <CardBook img={b2} />
                <CardBook img={b2} />
                <CardBook img={b2} />
              </>
            ))}
          </div>
          <div className="right" onClick={handleLeftClick}>
            <span>
              <BsIcons.BsArrowRightCircle />
            </span>
          </div>
        </div>
      </div>
    </MainContainner>
  );
}

export default Books;

import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/logo.png";
import { Containner, Content } from "./styles";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import b1 from "../../assets/books/b2.png";
import { Link } from "react-router-dom";
export const CardBook = ({ img }: { img: string }) => {
  return (
    <Containner>
      <Content>
        <div className="item-book">
          <Link to={`livros/`}>
            <div className="img-body">
              <img src={img} />
            </div>
          </Link>
          <div className="content-descri">
            <div className="item-tilulo">
              <h3>Um Romance verde</h3>
            </div>

            <div className="item-discription">
              <span>
                <strong>Feito por: </strong>
                Alberto Kela
              </span>
              <div className="item-link-downlad">
                <div className="redes-social">
                  <p>
                    <FaIcons.FaFacebookF color="#0c854e" />
                  </p>
                  <p>
                    {" "}
                    <FaIcons.FaBookReader color="#0c854e" />
                  </p>
                  <p>
                    {" "}
                    <FaIcons.FaYoutube color="#0c854e" />
                  </p>
                </div>
                <div className="redes-social">
                  <a style={{ cursor: "pointer" }}>
                    <span>
                      <MdIcons.MdFavorite color="#d00" />

                    
                    </span>
                  </a>

                  <p style={{ cursor: "pointer" }}>
                    <a target="_blank" href={""}>
                      <FaIcons.FaDownload />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Containner>
  );
};

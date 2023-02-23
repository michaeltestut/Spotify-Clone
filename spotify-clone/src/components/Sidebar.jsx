import React from "react";
import styled from "styled-components";
import { IoLibraryOutline } from "react-icons/io5";
import { MdOutlineHome, MdSearch } from "react-icons/md";
import Playlists from "./Playlists";

export default function Sidebar() {
  return (
    <Container>
      <div className="top_links">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="Spotify Logo"
          />
        </div>
        <ul>
          <li>
            <MdOutlineHome />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibraryOutline />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <div className="divider"></div>
      <Playlists />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top_links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
      img {
        max-inline-size: 80%;
        block-size: auto;
      }
    }
    ul{
        list-style-type: none;
        display:flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        li{
            display: flex;
            gap: 1rem;
            cursor: pointer;
            transition:0.3s ease-in-out;
            &:hover{
                color:white;
            }
        }

    }
  }
  .divider{
    border:.5px solid grey;
    width:85%;
    align-self:center;
    opacity: 0.5;
  }
`;

import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import {ImVolumeMedium} from "react-icons/im"
export default function Volume() {
  const [{ token }] = useStateProvider();
  const setVolume = async (e) => {
    try {
      await axios.put(
        `https://api.spotify.com/v1/me/player/volume`,
        {},
        {
          params: {
            volume_percent: parseInt(e.target.value),
          },
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <ImVolumeMedium />  
      <input type="range" min={0} max={100} onMouseUp={(e) => setVolume(e)} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
    svg{
        color:white;
        margin-right: 1rem;
        font-size:1.2rem;

    }
  input {
    -webkit-appearance: none;
    width: 15rem;
    border-radius: 2rem;
    height: 0.3rem;
    background-color: #3f3e3e;
    overflow: clip;
    overflow-clip-margin: 0.05rem;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 0.75rem;
      height: 0.75rem;
      background-color: white;
      border-radius: 50%;
      box-shadow: -200px 95px 0 200px white;
    }
    &:hover {
      &::-webkit-slider-thumb {
        box-shadow: -200px 95px 0 200px #49f585;
        border:1px solid #282828;
      }
    }
  }
`;

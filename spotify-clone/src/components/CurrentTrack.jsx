import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { reducerCases } from '../utils/constants';
import { useStateProvider } from '../utils/StateProvider';
export default function CurrentTrack() {
    const [{ token, currentlyPlaying}, dispatch] = useStateProvider();
    useEffect(() => {
      const getCurrentTrack = async () => {
        try {
          const response = await axios.get(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
              },
            }
          );
          if(response.data !==""){
            const {item} = response.data;
            const currentlyPlaying = {
                id: item.id,
                name: item.name,
                artists: item.artists.map((artist)=>artist.name),
                image: item.album.images[2].url,
            }
              dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
          }
        } catch (err) {
          console.log(err);
        }
      };
      getCurrentTrack();
    }, [token, dispatch]);
  return (
    <Container>
        {
            currentlyPlaying && (
                <div className="track">
                    <div className="track_image">
                        <img src={currentlyPlaying.image} alt="currently playing" />
                    </div>
                    <div className="track_info">
                        <h5 className="trackName">
                            {currentlyPlaying.name}
                        </h5>
                        <h6 className="trackArtists">
                            {currentlyPlaying.artists.join(", ")}
                        </h6>
                    </div>
                </div>
            )
        }
    </Container>
  )
}

const Container=styled.div`
    .track{
        display: flex;
        align-items: center;
        gap: 1rem;
        &_image{
            box-shadow: rgba(0, 0, 0, 0.5) 0px 25px 50px -12px;
        }
        &_info{
            display: flex;
            flex-direction: column;
            gap:0.5rem;
            h5{
                color:white;
                
            }
            h6{
                color: #b3b3b3
            }
        }
    }
`
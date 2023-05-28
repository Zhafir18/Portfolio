import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Iframe from 'react-iframe';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Playlist() {
  useEffect(() => {
    AOS.init({
      // once: true,
      duration: 500,
    });
  }, []);

  return (
    <div className="Playlist">
      <Container>
        <div className="d-flex justify-content-center mt-5">
          <h1 className="judul">My Playlist</h1>
        </div>
        <div className="iframe" data-aos="zoom-in">
          <iframe
            // style="border-radius:12px"
            src="https://open.spotify.com/embed/playlist/5UxECqFnwnvUL7JoPTYcZo?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </div>
  );
}

export default Playlist;

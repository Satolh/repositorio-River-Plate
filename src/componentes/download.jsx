import React, { useEffect } from 'react';
import data from "../camiseta/camisetas.json"


const downloadImages = async (imageUrls) => {
    for (let url of imageUrls) {
      try {
        const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`;
        const response = await fetch(proxyUrl, { mode: 'cors' });
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const blob = await response.blob();
        const urlBlob = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = urlBlob;
        link.setAttribute('download', getFileNameFromUrl(url));
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      } catch (error) {
        console.error('Error downloading the image: ', error);
      }
    }
  };
  

const getFileNameFromUrl = (url) => {
  return url.substring(url.lastIndexOf('/') + 1);
};

const ImageDownloader = ({ imageUrls }) => {
  useEffect(() => {
    downloadImages(imageUrls);
  }, [imageUrls]);

  return (
    <div>
      <p>Downloading Images...</p>
    </div>
  );
};

const AppDownload = () => {
    const urlCamiseta = data.temporada.camiseta;

  return (
    <div>
      <ImageDownloader imageUrls={urlCamiseta} />
    </div>
  );
};

export default AppDownload;

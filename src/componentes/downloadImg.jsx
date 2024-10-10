import React, { useEffect } from 'react';

const DownloadImages = ({ imageUrls }) => {
  useEffect(() => {
    const downloadImage = async (url) => {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = url.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    imageUrls.forEach(url => {
      downloadImage(url);
    });
  }, [imageUrls]);

  return (
    <div>
      <h1>Descargando imágenes...</h1>
    </div>
  );
};

export default DownloadImages;

import React, { useState } from "react";
import {
  imageKendeng,
  imageMugas,
  imagePMB,
  imagePMBbo,
} from "../constant/imageDocs";

const Documentation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexM, setCurrentIndexM] = useState(0);
  const totalSlides = imageKendeng.length;
  const totalSlidesM = imageMugas.length;

  // Fungsi untuk pindah ke slide berikutnya
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };
  const nextSlideM = () => {
    setCurrentIndexM((prevIndex) => (prevIndex + 1) % totalSlidesM);
  };

  // Fungsi untuk pindah ke slide sebelumnya
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const prevSlideM = () => {
    setCurrentIndexM(
      (prevIndex) => (prevIndex - 1 + totalSlidesM) % totalSlidesM,
    );
  };

  return (
    <>
      <div
        id="laboran-mugas"
        className="hero pt-20 bg-pink-50 min-h-[80vh] items-start"
      >
        <div className="hero-content flex-col w-[400px]">
          <h1 className="text-4xl font-bold bg-gradient-to-br from-sky-400 to-purple-600 bg-clip-text text-transparent">
            Dokumentasi Laboran Mugas
          </h1>
          <div className="carousel rounded-box relative w-full h-[400px] overflow-hidden">
            {imageMugas.map((img, i) => (
              <div
                key={i}
                className={`carousel-item absolute transition-opacity duration-500 ${
                  i === currentIndexM ? "opacity-100" : "opacity-0"
                }`}
                style={{ width: "100%", height: "400px" }}
              >
                <img
                  src={img}
                  alt={`gambar${i}`}
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}

            {/* Tombol Navigasi */}
            <div className="absolute left-5 right-5 top-1/2 flex justify-between items-center -translate-y-1/2">
              <button onClick={prevSlideM} className="btn btn-circle">
                ❮
              </button>
              <button onClick={nextSlideM} className="btn btn-circle">
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero bg-gradient-to-tl from-pink-50 to-purple-200 min-h-screen">
        <div className="hero-content flex-col w-[400px]">
          <h1 className="text-4xl font-bold bg-gradient-to-br from-sky-400 to-purple-600 bg-clip-text text-transparent">
            Dokumentasi Laboran Kendeng
          </h1>
          <div className="carousel rounded-box relative w-full h-[400px] overflow-hidden">
            {imageKendeng.map((img, i) => (
              <div
                key={i}
                className={`carousel-item absolute transition-opacity duration-500 ${
                  i === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{ width: "100%", height: "400px" }}
              >
                <img
                  src={img}
                  alt={`gambar${i}`}
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}

            {/* Tombol Navigasi */}
            <div className="absolute left-5 right-5 top-1/2 flex justify-between items-center -translate-y-1/2">
              <button onClick={prevSlide} className="btn btn-circle">
                ❮
              </button>
              <button onClick={nextSlide} className="btn btn-circle">
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="pmb"
        className="hero pt-14 bg-gradient-to-tl from-pink-50 to-purple-200 min-h-screen items-start"
      >
        <div className="hero-content flex-col w-[400px]">
          <h1 class="text-4xl font-bold bg-gradient-to-br from-sky-400 to-purple-600 bg-clip-text text-transparent">
            Dokumentasi Penerimaan Mahasiswa Baru PMB
          </h1>

          <div className="carousel w-full mt-10">
            {imagePMB.map((item, i) => (
              <div
                id={`slide${i}`}
                className="carousel-item relative w-full"
                key={i}
              >
                <img
                  src={item}
                  className="w-full object-cover rounded-lg drop-shadow-lg"
                  loading="lazy"
                  alt={`Slide ${i + 1}`}
                />

                <p className="absolute bottom-1 left-[43%] bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg text-sm">
                  {i + 1} / {imagePMB.length}
                </p>

                {/* Tombol Navigasi */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a
                    href={`#slide${(i - 1 + imagePMB.length) % imagePMB.length}`}
                    className="btn btn-circle"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide${(i + 1) % imagePMB.length}`}
                    className="btn btn-circle"
                  >
                    ❯
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-full gap-3 mt-8">
            {imagePMBbo.map((img, i) => (
              <div className="w-auto rounded-lg drop-shadow-lg" key={i}>
                <img
                  src={img.imgOn}
                  alt="Burger"
                  loading="lazy"
                  className=" aspect-auto w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="w-full mt-8 mb-10">
            <h4 className="text-xl font-bold text-zinc-600 my-4">
              Sertijab Ormawa Unisbank 2025
            </h4>
            <div class="w-full max-w-2xl mx-auto aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[200px] rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/Sy8OULgBnoE"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documentation;

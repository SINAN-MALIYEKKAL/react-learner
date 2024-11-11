import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Movies.css';
import { movies } from '../../lib/data';

export default function Watchscreen() {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = () => {
        const movie = movies.find((it) => it.key == id);
        console.log({ movie });
        setData(movie);
      };
      fetchData();
    }, [id]); // Include `id` as a dependency to re-fetch when it changes

    return (
      <div className='bg-[#181b22] h-full w-full'>
        <div className='bg-slate-700 h-12 flex items-center px-4'>
          <ul className='text-white text-[15px] flex space-x-4'>
            <Link to="/home">
              <li className='list-none'>Home</li>
            </Link>
            <span>•</span>
            <Link to={`/movies/${id}`}>
              <li className='list-none'>Movies</li>
            </Link>
          </ul>
        </div>
        
        <section className='p-4'>
          <div className='flex gap-7 lg:flex-row md:flex-col-reverse flex-col-reverse'>
            <div className='flex flex-col items-start gap-3 p-4 rounded-lg lg:w-[30%]'>
              <img
                className='h-[236px] w-[160px] object-cover rounded-lg'
                src={data?.image}
                alt={data?.movieName || 'Movie Image'}
              />
              <p className='text-white text-[25px] font-semibold mt-4'>{data?.movieName}</p>
              <p className='text-white mt-2 text-[13px]'>{data?.description}</p>
              <button className='mt-2 py-2 px-4 bg-slate-700 text-white text-[10px] font-bold rounded-lg flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                  <path fill="white" d="M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.75a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.25a.75.75 0 0 0 0-1.5H6.5z" />
                </svg>
                &nbsp;Read full
              </button>

              <div className='mt-2 text-[13px] space-y-2'>
                <p className='text-[#aaa]'><strong className='text-white'>Genres:</strong> Thriller, Mystery, Horror</p>
                <p className='text-[#aaa]'><strong className='text-white'>Cast:</strong> Simon Rex, Haley Joel Osment, Naomi Ackie</p>
                <p className='text-[#aaa]'><strong className='text-white'>Production:</strong> Free Association, Bold Choices, Metro-Goldwyn-Mayer</p>
                <p className='text-[#aaa]'><strong className='text-white'>Country:</strong> United States of America</p>
                <p className='text-white'><strong className='text-white'>Duration:</strong> 103 min</p>
              </div>
              <hr className="border-t-2 border-[#aaa] opacity-10 w-full mx-auto mt-2" />

              <div className='flex gap-3'>
                <button className="bg-[#f04f24] w-18 h-18 rounded-md flex flex-col justify-center items-center text-white px-2 py-2">
                  <span className="text-[18px] font-bold">8.8</span>
                  <span className="text-[11px] font-normal mt-1">8 vote</span>
                </button>
                <div className='flex flex-col text-white gap-3'>
                  <p>Vote the movie</p>
                  <div className='flex space-x-2'>
                    <button className='border-2 border-white text-[10px] font-bold rounded-lg py-0 px-4 h-8 flex justify-center items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <g fill="none">
                          <path fill="white" d="M15 10l-.493-.082A.5.5 0 0 0 15 10.5zM4 10v-.5a.5.5 0 0 0-.5.5zM16.522 2.392l.49.098z" />
                          <path stroke="white" d="M8 10v10" />
                        </g>
                      </svg>
                      &nbsp;Like it
                    </button>
                    <button className='border-2 border-white text-[10px] font-bold rounded-lg py-2 px-4 h-8 flex justify-center items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <path fill="white" d="M19 15V3h4v12zM15 3a2 2 0 0 1 2 2v10c0 .55-.22 1.05-.59 1.41L9.83 23l-1.06-1.06c-.27-.27-.44-.64-.44-1.06l.03-.31l.95-4.57H3a2 2 0 0 1-2-2v-2c0-.26.05-.5.14-.73l3.02-7.05C4.46 3.5 5.17 3 6 3zM5.97 5H15V4H6c-.82 0-1.53.5-1.86 1.27zM3 12v2h8.78l-1.13 5.32L15 14.97z" />
                      </svg>
                      &nbsp;Dislike
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:w-[70%]'>
              <div
                style={{
                  backgroundImage: `url(${data?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                className='flex justify-center items-center lg:h-[650px] h-[400px]'
              >
                <a href="#" className="glightbox_video">
                  <svg width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="inner-circle" d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z" fill="white"></path>
                    <circle className="outer_circle" cx="65.5" cy="65.5" r="64" stroke="white"></circle>
                    <path className="play" fill-rule="evenodd" clip-rule="evenodd" d="M60 76V57L77 66.7774L60 76Z" fill="#BF2428"></path>
                  </svg>
                </a>
              </div>
              <div className='bg-[#323744] lg:h-[60px] overflow-hidden'>
                <div className='text-white flex gap-10 py-3 p-5 text-[14px]'>
                  <p className='flex justify-center items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512">
                      <path fill="white" d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z" />
                    </svg>
                    Discussion
                  </p>
                  <p className='flex justify-center items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="white" d="M13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.5 3.5 0 0 1 0 1.457l5.11 2.788a3.5 3.5 0 1 1-.958 1.755" />
                    </svg>
                    Share
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
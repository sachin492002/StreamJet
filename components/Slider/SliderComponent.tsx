'use client'
import Slider from 'react-slick';

import GenreCard from "@/components/GenreCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "@/components/MovieComponents/MovieCard";
import {useRef} from "react";
import CastCard from "@/components/MovieComponents/CastCard";

interface Props{
    data : any,
    type :String,
    reference : any,
    settings : any,
}
export default function SliderComponent({data,type,reference,settings}:Props){


    return (<>

    <Slider
        className='inline-flex w-full'
        ref = {reference} {...settings}
    >
        {
            data?.map((g:any) => {
                return (
                    <div key={g.name} className='inline-flex justify-center gap-4  md:gap-10'>
                        {(type=='genre') ? <GenreCard genre={g}/> : (type=='movie') ? <MovieCard movie={g}/> : <CastCard cast={g}/>}
                    </div>
                )
            })
        }
    </Slider>

        </>
)
}


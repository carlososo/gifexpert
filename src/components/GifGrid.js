import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// const URL ='https://api.giphy.com/v1/gifs/search';

export const GifGrid =({category})=>{

    const {data:images, loading} = useFetchGifts(category);


    return(
        <>
            <h3>{ category}</h3>
            {loading && <p>Loading</p>}
            <div className="card-grid">
            {
                images.map(img =>{
            return <GifGridItem
                    key ={img.id}
                    img ={img} />
        })
        }
        </div>
        </>
    )
}
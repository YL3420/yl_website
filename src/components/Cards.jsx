import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'
import Card from './Card.jsx'
import orie_img from '../assets/images/orie_img.png'
import pacman_proj from '../assets/images/pacman_proj.png'
import tsp_img from '../assets/images/tsp_img.png'
import projects from '../assets/texts/projects.json'


const Cards = () => {

    // const loadSources = () =>{
    //     const srcObj = import.meta.glob('../assets/images/*.{png}', {eager: true});

    //     return new Map(
    //         Object.entries(srcObj).map(([path, mod]) => {
    //             const name = path.split('/').pop().split('.')[0];
    //             console.log("hi");
    //             return [name, mod.default];
    //         })
    //     )
    // }    

    // const sources = loadSources();

    // console.log(Object.keys(sources));

    const { hash } = useLocation();

    const sources = {
        'orie_img': orie_img,
        'pacman_proj': pacman_proj,
        'tsp_img': tsp_img
    }

    useEffect(() => {
        if(hash){
            document.querySelector(hash).scrollIntoView({ behavior:'smooth' });
        }
    }, [hash])

    return (
        <section className='px-4 py-4' id='projects'>
            <div className='container-xl lg:container m-auto border-t-[0.5px] border-white'>

                <h2 className='text-3xl font-bold mt-6 mb-6 text-center'>
                Projects
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                {projects.map((p, i) => (
                    <Card id={i}
                    title={p.title}
                    tags={p.tags}
                    description={p.description}
                    banner={ sources[p.banner_src] }
                    demo_link={p.demo_link}
                    repo_link={p.repo_link} />
                ))}

                </div>
            </div>
        </section>
    )
}


export default Cards
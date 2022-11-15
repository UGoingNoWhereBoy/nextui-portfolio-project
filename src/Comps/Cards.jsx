import React from 'react'
import Customcard from './Customcard'
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb';
import { SiMongodb, SiFormstack,SiHiveBlockchain,SiScrutinizerci, SiDjango} from 'react-icons/si'
import { MdOutlineAddReaction, MdOutlineVideoSettings } from 'react-icons/md'
import { AiOutlineApi, AiFillHtml5 } from 'react-icons/ai'
import { FaPython } from 'react-icons/fa'
import { SiVite } from 'react-icons/si'
import { DiReact, DiCss3 } from 'react-icons/di'
import next from '../assets/nextjs.png';
import react from '../assets/reactjs.png';
import Django from '../assets/django.png';
import NextUI from '../assets/nextui-banner.jpeg'
import { Container } from '@nextui-org/react';

const Cards = () => {
  return (
    <>
    <Customcard cardpicture={next} cardtitle='NextJS/Next-Auth' cardurl={'https://youtu.be/mVUmS8U1UYM'}
     githublink='https://github.com/UGoingNoWhereBoy/nextjs-auth-project.git'
     iconone={<TbBrandNextjs />}  icontwo={<TbBrandTailwind />} 
     iconthree={<SiMongodb />} iconfour={<MdOutlineAddReaction />} iconfive={<SiFormstack />} iconsix={<AiOutlineApi />}
     content1='Nextjs/NextAuth' content2='Tailwindcss' content3='MongodDB' 
     content4='React-Icons' content5='Formik and Yup' content6='Api Usage'
     githubButton={true} customPadding={'$9'}/>


    <Customcard cardpicture={react} githubButton={true} liveDemo={true}
     cardtitle='ReactJS/Sanity' cardurl={'https://youtu.be/-By5EOMMKVA'}
     githublink='https://github.com/UGoingNoWhereBoy/ReactJs-TailwindCss-Sanity.io-Web3-Project.git'
     iconone={<DiReact /> } icontwo={<TbBrandTailwind />} iconthree={<SiHiveBlockchain />} iconfour={<SiScrutinizerci />}
     iconfive={<MdOutlineAddReaction />} iconsix={<AiOutlineApi />}
     content1={"ReactJs" }content2={"Tailwindcss"} content3={"Web3 Provider"} 
     content4={"Sanity.io"} content5={'React-Icons'} content6={"Api Usage"} customPadding={'$9'}
     liveDemoLink={"https://ugoingnowhereboy.netlify.app/"}/>



    <Customcard cardpicture={NextUI} cardtitle='Vite/NextUI' cardurl={'https://youtu.be/JgBTV2cjlOY'}
    iconone={<SiVite /> } icontwo={<TbBrandNextjs />} iconthree={<MdOutlineVideoSettings />} iconfour={<MdOutlineAddReaction />}
    content1={"ViteJs"} content2={"NextUI"} content3={"React Video-Player"} content4={"React-Icons"}
    customButton={true} customPadding={'$15'} githublink='https://github.com/UGoingNoWhereBoy/nextui-portfolio-project.git'/>


    <Customcard cardpicture={Django} cardtitle='Python/Django' cardurl={'https://youtu.be/-wTwW2EVaUc'}
    githublink='https://github.com/UGoingNoWhereBoy/Django-Project.git'
    iconone={<FaPython />} icontwo={<SiDjango />} iconthree={<AiFillHtml5 />} iconfour={<DiCss3 />}
    content1={"Python"} content2={"Django"} content3={"Html"} content4={"CSS"} githubButton={true} customPadding={'$15'}/>
    </>
  )
}

export default Cards
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"


function Row({text1,text2,text3} : {text1:String, text2:String, text3:String}) {
  return(
    <div className='basis-1/4 flex-1 object-cover mx-auto shadow-xl rounded-2xl flex flex-col items-center justify-center divide-y p-10 divide-slate-200'>
    <h1 className='text-center rounded-md bg-slate-100 leading-8 py-3'>{text1}</h1>
    <h1 className='text-center rounded-md  leading-8 py-2'>{text2}</h1>
    <h1 className='text-center rounded-md  leading-8 py-2'>{text3}</h1>
  </div>
  );

}


const Home: NextPage = () => {
  return (
    <div className=' fixed-bottom'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-slate-50 md:px-96 lg:px-96'>

        <div className='text-center p-10'>
        <div className=" text-4xl py-2 text-teal-500 font-medium">Marios Charalambides</div>
        <div className="font-semibold py-2">Software Engineer</div>
        </div>

        <div className='flex flex-col gap-10 lg:flex-col lg:flex-wrap'>

          <Row text1 = "2016 - 2022 University of Patras"
               text2 = "Computer Engineering and Informatics Department"
               text3 = "GPA: 8.58/10"
                 />

          <Row text1 = "2014 - 2016 Infantry School for Reserved Officers"
            text2 = "Graduated the Infantry School of ReserveOfficers and completed duties serving as a Reserve Second Lieutenan"
            text3=""
            />

          <Row text1 = "2011 - 2014 Kykkos B' Lyceum"
             text2 = "High School"
             text3 = "GPA: 19/20"/>

      </div>


        <div className='text-5xl my-10 flex justify-center gap-8 text-gray-600'>
          <a href='https://www.linkedin.com/in/marios-charalambides-73abb91b2/'><AiFillLinkedin /></a>
          <a href='https://github.com/mcharalambides'><AiFillGithub /></a>
        </div>
      </main>

      <footer className=' bg-slate-50'></footer>

    </div>
  )
}

export default Home

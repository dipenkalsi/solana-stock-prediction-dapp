import React, { useContext, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/logo.png"
import { AiOutlineSearch } from "react-icons/ai";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {BsLinkedin} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsStackOverflow} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si'
import {SiCodingninjas} from 'react-icons/si'

const styles = {
  container: "flex w-screen h-16 bg-black px-4 py-3 mb-5 fixed",
  leftHeader: "flex flex-1 text-white items-center mt-10 ",
  searchWrapper: "flex flex-1",
  searchInputContainer:
    "text-white items-center flex flex-1 -ml-64 border border-gray-400 mr-12 hover:bg-[#1E2123] duration-300 p-3 rounded-lg",
  searchIcon: "text-gray-400 text-3xl mr-3",
  searchInputWrapper: "text-gray-400 w-full",
  searchInput: "bg-transparent outline-none",
  rightHeader: "flex items-center justify-end text-white gap-8",
  menuItem: "cursor-pointer font-bold hover:text-green-500 duration-300 ",
};

const Header = () => {

  return (
    <div className={styles.container}>
      <div className={styles.leftHeader}><Image src={logo} width={90} height={90}/></div>
      <div className={styles.searchWrapper}>
        <div className={styles.searchInputContainer}>
          <AiOutlineSearch className={styles.searchIcon} />
          <div className={styles.searchInputWrapper}>
            <input placeholder="Search..." className={styles.searchInput} />
          </div>
        </div>
      
      </div>
      <div className={styles.rightHeader}>
        <div className='flex  space-x-2 text-cyan-200 '>
      <a href="https://github.com/dipenkalsi" target="_blank" rel="noopener noreferrer" className='p-2 rounded-full hover:bg-white/[0.1] transition-all ease-in duration-100'>
          <BsGithub size="25px"/>
        </a>
        <a href="https://www.linkedin.com/in/dipen-kalsi-4448b5205/" className='p-2 rounded-full hover:bg-white/[0.1] transition-all ease-in duration-100' target="_blank" rel="noopener noreferrer">
          <BsLinkedin size="25px"/>
        </a>
        <a href="https://www.instagram.com/_dipen02/" className='p-2 rounded-full hover:bg-white/[0.1] transition-all ease-in duration-100' target="_blank" rel="noopener noreferrer">
          <BsInstagram size="25px"/>
        </a>
        <a href="https://twitter.com/DipenKalsi" className='p-2 rounded-full hover:bg-white/[0.1] transition-all ease-in duration-100' target="_blank" rel="noopener noreferrer">
          <BsTwitter size="25px"/>
        </a>
        <a href="https://stackoverflow.com/users/20255900/dipen-kalsi" className='p-2 rounded-full hover:bg-white/[0.1] transition-all ease-in duration-100' target="_blank" rel="noopener noreferrer">
          <BsStackOverflow size="25px"/>
        </a>
        <a href="https://leetcode.com/kalsidipen/" className='p-2 rounded-full hover:bg-white/[0.1] transition-all ease-in duration-100' target="_blank" rel="noopener noreferrer">
          <SiLeetcode size="25px"/>
        </a>
        </div>
        <WalletMultiButton className="bg-cyan-200 text-black hover:text-white transition-all ease-in duration-100"/>
      </div>
    </div>
  );
};

export default Header;

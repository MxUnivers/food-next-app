import React from 'react';
import BarnerHome from '../components/web/home/BarnerHome';
import ServiceHome from '../components/web/home/ServiceHome';
import AboutHome from '../components/web/home/AboutHome';
import MenuHome from '../components/web/home/MenuHome';
import ResevationHome from '../components/web/home/ResevationHome';
import TeamHome from '../components/web/home/TeamHome';
import AvisClient from '../components/web/home/AvisClient';
import FooterWeb from '../components/web/FooterWeb';

const HomePage = () => {
    return (
        <div class="container-xxl bg-white p-0">
        
        <BarnerHome/>
        <ServiceHome/>
        <AboutHome/>
        <MenuHome/>
        <ResevationHome/>
        <TeamHome/>
        <AvisClient/>
        <FooterWeb/>
        
        
      </div>
    );
  };
  
  export default HomePage;
  
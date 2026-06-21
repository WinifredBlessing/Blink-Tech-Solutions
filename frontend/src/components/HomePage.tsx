import React from 'react';
import { PageId } from '../types';

import { HeroSection } from './home/HeroSection';
import { ServicePillarsSection } from './home/ServicePillarsSection';
import { WhyChooseUsSection } from './home/WhyChooseUsSection';
import { ImpactStatsSection } from './home/ImpactStatsSection';
import { CtaSection } from './home/CtaSection';

interface HomePageProps {
  setCurrentPage: (page: PageId) => void;
}

export function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <div className="relative overflow-hidden w-full bg-white text-slate-900" id="homepage_container">
      <HeroSection setCurrentPage={setCurrentPage} />
      <ServicePillarsSection setCurrentPage={setCurrentPage} />
      <WhyChooseUsSection />
      <ImpactStatsSection />
      <CtaSection setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default HomePage;

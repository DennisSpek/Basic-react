import React, { useState } from 'react';
import {onboardingContext} from './consumer';

export const OnboardingProvider = ({ children }:{children: React.ReactNode}) => {
  const [step, setStep] = useState<number>(1);

  return (
    <onboardingContext.Provider value={{step, setStep}}>
      {children}
    </onboardingContext.Provider>
  );
};
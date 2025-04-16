import React, { createContext, useContext, useState, ReactNode } from 'react';

type FormContextType = {
  showContactForm: boolean;
  setShowContactForm: (show: boolean) => void;
  showPartnershipForm: boolean;
  setShowPartnershipForm: (show: boolean) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showPartnershipForm, setShowPartnershipForm] = useState(false);

  return (
    <FormContext.Provider value={{ 
      showContactForm, 
      setShowContactForm,
      showPartnershipForm,
      setShowPartnershipForm
    }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}; 
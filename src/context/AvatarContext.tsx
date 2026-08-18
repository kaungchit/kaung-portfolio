import React, { createContext, useContext, useState, useEffect } from 'react';
import { developerProfile } from '../data/portfolioData';

interface AvatarContextType {
  avatarUrl: string;
  setAvatarUrl: (url: string) => void;
  uploadPhoto: (file: File) => void;
  resetToDefault: () => void;
}

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

const STORAGE_KEY = 'kaung_chit_san_avatar_url';

export const AvatarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [avatarUrl, setAvatarUrlState] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return saved;
    }
    return developerProfile.avatarUrl || '/profile.jpg';
  });

  const setAvatarUrl = (url: string) => {
    setAvatarUrlState(url);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, url);
    }
  };

  const uploadPhoto = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        const dataUrl = e.target.result as string;
        setAvatarUrl(dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const resetToDefault = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    setAvatarUrlState(developerProfile.avatarUrl || '/profile.jpg');
  };

  return (
    <AvatarContext.Provider value={{ avatarUrl, setAvatarUrl, uploadPhoto, resetToDefault }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error('useAvatar must be used within an AvatarProvider');
  }
  return context;
};

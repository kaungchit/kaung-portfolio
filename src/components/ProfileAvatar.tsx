import React, { useRef, useState } from 'react';
import { developerProfile } from '../data/portfolioData';
import { useAvatar } from '../context/AvatarContext';
import { Camera, User, Check, UploadCloud } from 'lucide-react';

interface ProfileAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showStatus?: boolean;
  allowUpload?: boolean;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  className = '',
  size = 'md',
  showStatus = false,
  allowUpload = false,
}) => {
  const { avatarUrl, uploadPhoto } = useAvatar();
  const [imageError, setImageError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sizeClasses = {
    sm: 'w-9 h-9 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-24 h-24 sm:w-28 sm:h-28 text-xl',
    xl: 'w-full aspect-square max-w-[280px] text-3xl',
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageError(false);
      uploadPhoto(file);
    }
  };

  const handleAvatarClick = () => {
    if (allowUpload && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/jpg, image/webp"
        className="hidden"
        aria-label="Upload profile image"
      />

      <div
        onClick={handleAvatarClick}
        className={`${sizeClasses[size]} rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-xl flex items-center justify-center relative group ${
          allowUpload ? 'cursor-pointer hover:border-cyan-400/80 transition-colors' : ''
        }`}
        title={allowUpload ? 'Click to upload your profile.jpg photo' : developerProfile.name}
      >
        {!imageError && avatarUrl ? (
          <img
            src={avatarUrl}
            alt={developerProfile.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-[#10141D] flex flex-col items-center justify-center text-cyan-400 font-bold tracking-tight">
            <span>KC</span>
            {size === 'lg' && (
              <span className="text-[10px] font-mono text-slate-400 mt-1 font-normal">
                {developerProfile.name}
              </span>
            )}
          </div>
        )}

        {/* Hover Upload Overlay if allowUpload is enabled */}
        {allowUpload && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-cyan-300 text-xs font-semibold gap-1 p-2 text-center">
            <Camera className="w-5 h-5 text-cyan-400" />
            <span className="text-[10px] sm:text-xs">Upload Photo</span>
          </div>
        )}

        {/* Subtle inner border overlay */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
      </div>

      {/* Online Status Badge */}
      {showStatus && (
        <span
          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0B0E14] ring-2 ring-emerald-500/20"
          title="Available for Senior / Remote Roles"
        />
      )}

      {/* Direct upload badge trigger if allowUpload */}
      {allowUpload && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
          className="absolute -top-1.5 -right-1.5 p-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition-transform hover:scale-110 cursor-pointer"
          title="Upload or Change Photo"
          aria-label="Upload Photo"
        >
          <Camera className="w-3 h-3" />
        </button>
      )}
    </div>
  );
};

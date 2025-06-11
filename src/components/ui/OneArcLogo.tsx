
export const OneArcLogo = ({ size = "default" }: { size?: "small" | "default" | "large" }) => {
  const sizeClasses = {
    small: "w-4 h-4",
    default: "w-6 h-6", 
    large: "w-8 h-8"
  };

  const textSizeClasses = {
    small: "text-xs",
    default: "text-sm",
    large: "text-lg"
  };

  return (
    <div className="flex items-center gap-2 group">
      <div className={`${sizeClasses[size]} bg-primary rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
        <svg viewBox="0 0 24 24" className="w-3/4 h-3/4 text-white" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      <span className={`text-black font-semibold tracking-tight ${textSizeClasses[size]}`}>
        One Arc Digital
      </span>
    </div>
  );
};

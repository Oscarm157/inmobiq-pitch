interface SlideProps {
  children: React.ReactNode;
  className?: string;
  mode?: "light" | "dark";
  centered?: boolean;
}

export function Slide({ children, className = "", mode = "light", centered = true }: SlideProps) {
  const modeClass = mode === "dark" ? "slide-dark" : "slide-light";
  return (
    <div className={`w-full h-full overflow-y-auto scrollbar-hide touch-pan-y ${modeClass} ${className}`}>
      <div
        className={`w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 pt-20 sm:pt-20 pb-20 sm:pb-20 ${
          centered ? "min-h-full flex flex-col justify-center" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

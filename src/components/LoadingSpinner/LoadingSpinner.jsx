const LoadingSpinner = () => {
  const items = [
    { delay: 0.1, rotation: 36 },
    { delay: 0.2, rotation: 72 },
    { delay: 0.3, rotation: 108 },
    { delay: 0.4, rotation: 144 },
    { delay: 0.5, rotation: 180 },
    { delay: 0.6, rotation: 216 },
    { delay: 0.7, rotation: 252 },
    { delay: 0.8, rotation: 288 },
    { delay: 0.9, rotation: 324 },
    { delay: 1.0, rotation: 360 },
  ];

  return (
    <>
      <style>{`
        @keyframes spinner-fzua35 {
          0%, 10%, 20%, 30%, 60%, 70%, 80%, 90%, 100% {
            transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
          }
          50% {
            transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
          }
        }
        .spinner-item {
          position: absolute;
          width: 50%;
          height: 150%;
          background: currentColor;
          animation: spinner-fzua35 1s calc(var(--delay) * 1s) infinite ease;
        }
      `}</style>

      <div className="flex items-center justify-center w-full h-full min-h-[100px]">
        <div className="relative w-[9px] h-[9px] sm:w-[12px] sm:h-[12px] md:w-[16px] md:h-[16px]">
          {items.map((item, i) => (
            <div
              key={i}
              className="spinner-item dark:bg-white bg-black"
              style={{
                "--delay": item.delay,
                "--rotation": item.rotation,
                "--translation": 150,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;

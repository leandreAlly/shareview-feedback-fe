interface SpinnerProps {
  height: number;
  width: number;
}

function Spinner({ height, width }: SpinnerProps) {
  return (
    <div
      className={`spinner w-${width} h-${height} border-4 border-t-4 rounded-full`}
    ></div>
  );
}

export default Spinner;

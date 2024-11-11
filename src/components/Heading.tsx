
const Heading = ({ text, className }: { text: string; className?: string }) => {
  return <h1 className={` mb-5 text-3xl text-white font-bold ${className || ""}`}>{text}</h1>;
};

export default Heading;

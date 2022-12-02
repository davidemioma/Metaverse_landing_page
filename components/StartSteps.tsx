import React from "react";

interface Props {
  text: string;
  number: number;
}

const StartSteps = ({ text, number }: Props) => {
  return (
    <div className="flex items-center">
      <div className="bg-[#323f5d] w-[70px] h-[70px] flex items-center justify-center rounded-3xl">
        <p className="font-bold text-white text-xl">0{number}</p>
      </div>

      <p className="flex-1 ml-7 text-lg font-normal text-[#b0b0b0] leading-8">
        {text}
      </p>
    </div>
  );
};

export default StartSteps;

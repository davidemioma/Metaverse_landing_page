import React from "react";

interface Props {
  feature: {
    imgUrl: string;
    title: string;
    subtitle: string;
  };
}

const NewFeature = ({ feature }: Props) => {
  return (
    <div className="flex flex-col min-w-[210px] lg:max-w-[250px]">
      <div className="bg-[#323f5d] w-[60px] h-[60px] flex items-center justify-center rounded-3xl">
        <img
          className="w-1/2 h-1/2 object-contain"
          src={feature.imgUrl}
          alt={feature.title}
        />
      </div>

      <h1 className="mt-5 mb-3 text-white font-bold text-2xl leading-8">
        {feature.title}
      </h1>

      <p className="text-sm font-normal text-[#b0b0b0] leading-8">
        {feature.subtitle}
      </p>
    </div>
  );
};

export default NewFeature;

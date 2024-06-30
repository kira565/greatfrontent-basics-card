import { ReactNode } from "react";

interface CardProps {
  actions?: ReactNode[];
  coverImgSrc: string;
  category: string;
  title: string;
  children?: ReactNode;
}

export const Card: React.FC<CardProps> = ({
  actions,
  coverImgSrc,
  category,
  title,
  children,
}) => {
  return (
    <div className="w-[340px] rounded-lg bg-white overflow-hidden">
      <img
        src={coverImgSrc}
        alt="cover_img"
        className="object-cover w-full object-end h-[288px]"
      />
      <div className="flex flex-col px-6 py-4 gap-[12px] text-base">
        <div className="flex flex-col gap-2">
          <div className="text-sm w-[67px] h-[24px] text-center rounded-full bg-green-50 text-green-700 border border-green-200">
            {category}
          </div>
          <div className="text-lg font-semibold">{title}</div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-neutral-600">{children}</div>
          <div className="grid grid-cols-2">{actions}</div>
        </div>
      </div>
    </div>
  );
};

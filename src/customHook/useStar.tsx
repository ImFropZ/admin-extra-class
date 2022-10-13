import { StarIcon } from "../assets/svg";

interface useStarProps {
  totalStar: number;
  containerClassName?: string;
}

function useStar({ totalStar, containerClassName }: useStarProps) {
  const func = (initStar: number) => {
    return (
      <div className={containerClassName}>
        {Array.from(Array(totalStar), (v, i) => {
          return i < initStar ? (
            <StarIcon fill={"#FFFF00"} key={i} />
          ) : (
            <StarIcon key={i} />
          );
        })}
      </div>
    );
  };

  return func;
}

export default useStar;

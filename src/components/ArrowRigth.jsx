import arrowBlack from "../assets/flecha-derecha-negra.svg";
import arrowWhite from "../assets/fqa-flecha-blanca-derecha.svg";
export const ArrowRigth = ({ color, text }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-4 cursor-pointer">
        <p className={`font-semibold text-sm text-${color} underline`}>
          {text}
        </p>
        <img
          src={
            color === "black" ? arrowBlack : color === "white" ? arrowWhite : ""
          }
          alt="arrow"
        />
      </div>
    </>
  );
};

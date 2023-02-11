import SquareGreenLogo from "../SVGs/SquareGreenLogo";
import TspLogo from "../SVGs/TspLogo";

const MainLogo = ({ dark = false }: { dark?: boolean }) => {
  return <div>{!dark ? <SquareGreenLogo /> : <TspLogo />}</div>;
};

export default MainLogo;

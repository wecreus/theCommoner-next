import { Html } from "@react-three/drei";
import { useRouter } from 'next/navigation'
import { useAppSelector } from "@/app/lib/store/hooks";

const PopupHTML = ({ handleClick }: { handleClick: () => void }) => {
  const router = useRouter();
  const isInRange = useAppSelector((store) => store.globe.isInRange);

  return (
    <>
      <Html
        position={[30.2, 53.5, 59.8]}
        style={{
          opacity: isInRange ? 1 : 0,
          transform: "translate(0%, -50%)",
        }}
        className="three-embedded"
        
      >
        <div className="three-embedded__content" onClick={handleClick}>
          <span>
            Currently based in <b>Ternopil</b>
          </span>
          <span
            className="three-embedded__content--link"
            onClick={() => router.push("/contact")}
          >
            contact me
          </span>
        </div>
      </Html>
    </>
  );
};

export default PopupHTML;

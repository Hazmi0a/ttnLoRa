import { useRouter } from "next/router";

const Stat = () => {
  const router = useRouter();
  const { stat } = router.query;

  return <p>Stat: {stat}</p>;
};

Stat.defaultProps = {
  stat: "sensors",
};

export default Stat;

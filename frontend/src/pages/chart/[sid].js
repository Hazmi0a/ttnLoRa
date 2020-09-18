import { useRouter } from "next/router";

const Chart = () => {
  const router = useRouter();
  const { sid } = router.query;

  return <p>Chart: {sid}</p>;
};

Chart.defaultProps = {
  sid: '123"',
};

export default Chart;

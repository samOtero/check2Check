import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useAppState } from "../overmind";
import Layout from "../components/Theme/Layout";

export default function Home() {
  const timeline = useAppState((state) => state.timeline);
  return (
    <Layout title="Check2Check">
      <div>
        {timeline &&
          timeline.map((item) => {
            return <>{item.name}</>;
          })}
      </div>
    </Layout>
  );
}

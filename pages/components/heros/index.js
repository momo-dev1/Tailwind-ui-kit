import ComponentLayout from "../../../components/layout/ComponentLayout";
import Hero1 from "../../../components/kit/ui/hero/Hero1";
import SectionHeader from "../../../components/site/SectionHeader";

const HeroPages = ({}) => {
  return (
    <AppLayout
      title="heros Tailwind components"
      desc="heros more components for tailwind css"
    >
      <SectionHeader title="heros" />
      <ComponentLayout title="hero 1" vertical={false} element={<Hero1 />} />
    </AppLayout>
  );
};

export default HeroPages;

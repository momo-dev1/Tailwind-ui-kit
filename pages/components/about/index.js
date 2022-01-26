import ComponentLayout from "../../../components/layout/ComponentLayout";
import About1 from "../../../components/kit/ui/about/About1";
import About2 from "../../../components/kit/ui/about/About2";

const AboutPage = ({}) => {
  return (
    <AppLayout
      title="About Tailwind components"
      desc="About more components for tailwind css"
    >
      <SectionHeader title="About" />
      <ComponentLayout title="about1 1" vertical={false} element={<About1 />} />
      <ComponentLayout title="about1 2" vertical={false} element={<About2 />} />
    </AppLayout>
  );
};

export default AboutPage;

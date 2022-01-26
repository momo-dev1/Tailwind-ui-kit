import ComponentLayout from "../../../components/layout/ComponentLayout";
import About1 from "../../../components/kit/ui/about/About1";

const AboutPage = ({}) => {
  return (
    <AppLayout
      title="About Tailwind components"
      desc="About more components for tailwind css"
    >
      <SectionHeader title="About" />
      <ComponentLayout title="about1 1" vertical={false} element={<About1 />} />
    </AppLayout>
  );
};

export default AboutPage;

import ComponentLayout from "../../../components/layout/ComponentLayout";
import Feature1 from "../../../components/kit/ui/feature/Feature1";
import Feature2 from "../../../components/kit/ui/feature/Feature2";
import SectionHeader from "../../../components/site/SectionHeader";

const FeaturePage = ({}) => {
  return (
    <AppLayout
      title="Features Tailwind components"
      desc="Features more components for tailwind css"
    >
      <SectionHeader title="Features" />
      <ComponentLayout
        title="feature 1"
        vertical={false}
        element={<Feature1 />}
      />
      <ComponentLayout
        title="feature 2"
        vertical={false}
        element={<Feature2 />}
      />
    </AppLayout>
  );
};

export default FeaturePage;

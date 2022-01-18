import ComponentLayout from "../../../components/layout/ComponentLayout";
import Feature1 from "../../../components/kit/ui/feature/Feature1";
import SectionHeader from "../../../components/site/SectionHeader";

const FeaturePage = ({}) => {
  return (
    <AppLayout
      title="Features Tailwind components"
      desc="Features more components for tailwind css"
    >
      <SectionHeader title="" />
      <ComponentLayout
        title="feature 1"
        vertical={false}
        element={<Feature1 />}
      />
    </AppLayout>
  );
};

export default FeaturePage;

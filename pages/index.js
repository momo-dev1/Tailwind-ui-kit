import HomeLayout from "../components/layout/HomeLayout";
import SideBar from "../components/layout/SideBar";

export default function Home() {
  return (
    <HomeLayout title="tailwind kit">
      <div>
        <SideBar />
      </div>
    </HomeLayout>
  );
}

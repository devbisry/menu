import DashboardLayout from "@/components/Layout/DashbordLayout";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}
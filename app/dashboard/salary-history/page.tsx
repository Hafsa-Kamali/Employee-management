// src/app/dashboard/settings/page.tsx
"use client";
import DashboardLayout from "../dashboard-layout";
import SalaryHistoryTableMain from "./_components/salary-history-integretion";
import SalaryHistoryTable from "./_components/salary-history-table";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="flex w-full h-full">
        <div className="w-full">
          <div className="w-full pb-8">
            <div className="bg-black min-h-screen p-8 text-white">
              <SalaryHistoryTableMain walletAddress={"Xcff...cd412"} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;

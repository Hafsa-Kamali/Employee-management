// src/app/dashboard/settings/page.tsx
"use client";
import DashboardLayout from "../dashboard-layout";
import SalaryHistoryTable from "./_components/salary-management-table";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="flex w-full h-full">
        <div className="w-full">
          <div className="w-full pb-8">
            

            <SalaryHistoryTable />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;

// src/app/dashboard/settings/page.tsx
"use client";
import SecondarySidebar from "../_components/secondary-sidebar";
import DashboardLayout from "../dashboard-layout";
import ProfileDetails from "./_components/profile-details";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="flex w-full h-full">
        <SecondarySidebar />
        <div className="w-full">
          <ProfileDetails
            name="John Doe"
            email="john.doe@example.com"
            phone="+1 555 123 4567"
            country="United States"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;

"use client";

import SecondarySidebar from "./_components/secondary-sidebar";
import DashboardLayout from "./dashboard-layout";
import ProfileDetails from "./profile-settings/_components/profile-details";

const ProfilePage = () => {
  return (
    <DashboardLayout>
      <div className="flex w-full h-full">
        <SecondarySidebar />
        <div className="w-full h-full">
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

export default ProfilePage;

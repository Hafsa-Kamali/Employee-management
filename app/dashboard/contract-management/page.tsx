"use client";

import React, { useState } from 'react';
import DashboardLayout from "../dashboard-layout";
import ContractManagementHeader from './_components/contract-header';
import ContractManagementTable from './_components/contract-table';

const ContractManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [contractTypeFilter, setContractTypeFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilterApply = (contractType: string, duration: string) => {
    setContractTypeFilter(contractType);
    setDurationFilter(duration);
  };

  const handleCreateNewContract = () => {
    // Implement create new contract logic
    alert('Create new contract clicked');
  };

  return (
    <DashboardLayout>
      <div className="flex w-full h-full">
        <div className="w-full">
          <div className="w-full pb-8">
            
            <ContractManagementHeader 
              onSearch={handleSearch}
              onFilterApply={handleFilterApply}
              onCreateNewContract={handleCreateNewContract}
            />
            
            <ContractManagementTable 
              searchTerm={searchTerm}
              contractTypeFilter={contractTypeFilter}
              durationFilter={durationFilter}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ContractManagement;

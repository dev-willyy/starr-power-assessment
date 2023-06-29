import { useState } from 'react';
import './../styles/cancellationPolicy.css';
import { policyText } from '../data/cancellationPolicyData';

function CancellationPolicy() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const PolicyContent = ({ pageNum, isPrivacyPolicy }) => {
    return (
      <>
        <div className="cancellation-policy">
          <h2>{pageNum ? `Cancellation Policy ${pageNum}` : 'Privacy Policy'} </h2>
          <div className="policy-content">
            <p>{!isPrivacyPolicy ? `${pageNum === '1' ? policyText[0] : policyText[1]}` : policyText[2]}</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="tab-buttons-wrapper">
        <div className="tab-buttons">
          <button className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>
            Policy 1
          </button>
          <button className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>
            Policy 2
          </button>
          <button className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>
            Policy 3
          </button>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 0 && <PolicyContent pageNum="1" />}
        {activeTab === 1 && <PolicyContent pageNum="2" />}
        {activeTab === 2 && <PolicyContent isPrivacyPolicy />}
      </div>
    </div>
  );
}

export default CancellationPolicy;

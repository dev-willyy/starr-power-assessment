import { useState } from 'react';
import './../styles/cancellationPolicy.css';
import { policyText } from '../data/cancellationPolicyData';

const CancellationPolicy = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
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
        {activeTab === 0 && (
          <div class="cancellation-policy">
            <h2>Cancellation Policy 1</h2>
            <div class="policy-content">
              <p>{policyText[0]}</p>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div class="cancellation-policy">
            <h2>Cancellation Policy 2</h2>
            <div class="policy-content">
              <p>{policyText[0]}</p>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div class="cancellation-policy">
            <h2>Cancellation Policy 3</h2>
            <div class="policy-content">
              <p>{policyText[0]}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CancellationPolicy;

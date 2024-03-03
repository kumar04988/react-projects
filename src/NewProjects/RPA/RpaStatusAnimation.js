import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCog, // Step 1: Created
  faHourglassHalf, // Step 2: Processing
  faFileAlt, // Step 3: Data Extracting
  faCheckCircle, // Step 4: Signed
  faUpload, // Step 5: Uploaded
  faFileDownload, // Step 6: Data Extracted
  faCogs, // Step 7: Data Transforming
  faExchangeAlt, // Step 8: Data Transformed
  faCheck, // Step 9: Processed
} from '@fortawesome/free-solid-svg-icons';

import './RpaStatusAnimation.scss'; // Import the SCSS file for styling

const stepNames = [
  "Created",
  "Processing",
  "Data Extracting",
  "Signed",
  "Uploaded",
  "Data Extracted",
  "Data Transforming",
  "Data Transformed",
  "Processed",
];

const stepIcons = [
  faCog, // Step 1: Created
  faHourglassHalf, // Step 2: Processing
  faFileAlt, // Step 3: Data Extracting
  faCheckCircle, // Step 4: Signed
  faUpload, // Step 5: Uploaded
  faFileDownload, // Step 6: Data Extracted
  faCogs, // Step 7: Data Transforming
  faExchangeAlt, // Step 8: Data Transformed
  faCheck, // Step 9: Processed
];

const RpaProgressBar = ({ currentStatus, totalStatuses }) => {
  currentStatus=6
  totalStatuses=9

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentStatus > 0 && currentStatus <= totalStatuses) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const nextProgress = prevProgress + 1;
          if (nextProgress >= currentStatus) {
            clearInterval(interval);
          }
          return nextProgress;
        });
      }, 500); // Adjust the animation speed (milliseconds per step)
    }
  }, [currentStatus, totalStatuses]);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${(progress / totalStatuses) * 100}%` }}></div>
      </div>
      <div className="steps-container">
        {stepIcons.map((icon, index) => (
          <div key={index} className={`step ${index < progress ? 'completed' : ''}`}>
            <FontAwesomeIcon icon={icon} className="step-icon" />
            <div className="step-label">{stepNames[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RpaProgressBar;

import React, { useState } from 'react';
import bookmark from '../assets/bookmark.svg';
import navIcon from '../assets/navIcon.svg';
import tick from '../assets/tick.svg';
import { Link } from 'react-router-dom';

function JobCard({ date, jobTitle,jobdescription,jobPublisher,}) {

  const [save,setsave] = useState(false);

  function setSaveButton(){
    setsave(!save);
  }

  return (
    <div className="w-90 border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between">
          <div>
            <div className='flex gap-2 items-center'>
                <img src={navIcon} className='h-6' />
                <h1 className="text-xl font-bold text-gray-900">JobPortalX</h1>
            </div>
            <div className="flex items-center mt-1">
              <span className="text-sm text-gray-500">Posted</span>
              <span className="ml-2 text-xs font-medium bg-gray-50 px-2 py-1 rounded">
                {date || "01 days ago"}
              </span>
            </div>
          </div>
          <div>
            <button id='btn' onClick={setSaveButton} className="py-1 px-2 flex items-center gap-1 rounded-lg border-2 border-gray-300 ">
                <span className="text-sm text-gray-600">{save ? 'Saved' : 'Save'}</span>
                <img src={save ? tick : bookmark} alt="bookmark" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Job Details */}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {jobTitle || "Motion Designer"}
        </h2>

        {/* Benefits */}
        <div className="flex gap-2 ">
            <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded">
              {jobPublisher || "No Publisher"}
            </span>
        </div>
      </div>

      {/* description */}
      <div className='h-13 overflow-hidden px-4'>
        <h1>{jobdescription}</h1>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <button className="w-full py-2 bg-[#8a88bc] hover:bg-[#b1aeea] text-white font-medium rounded-md">
          Apply now
        </button>
      </div>
    </div>
  );
}

export default JobCard;
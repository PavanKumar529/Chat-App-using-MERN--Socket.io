import React from 'react'

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex items-center space-x-4 mt-4">

      <div className="form-control">
        <label className={`flex text-sm font-medium items-center cursor-pointer mb-1 ${selectedGender === "male" ? "selected": ""} `}>
          <input type="checkbox" className="checkbox checkbox-primary" 
            checked = {selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
          <span className="ml-2 text-sm text-gray-700">Male</span>
        </label>
      </div>

      <div className="form-control">
        <label className={`flex text-sm font-medium items-center cursor-pointer mb-1 ${selectedGender === "female" ? "selected": ""} `}>
          <input type="checkbox" className="checkbox checkbox-primary" 
            checked = {selectedGender === "female"}
            onChange = { () => onCheckboxChange("female")}
          />
          <span className="ml-2 text-sm text-gray-700">Female</span>
        </label>
      </div>

    </div>
  )
}

export default GenderCheckbox

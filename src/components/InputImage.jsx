import React from "react";

const InputImage = ({ title, error, onChange, value, ...props }) => {
  return (
    <div>
      <label>
        {value ? (
          <img src={URL.createObjectURL(value)} alt="" width="138" />
        ) : (
          "No file chosen"
        )}
        <input
          {...props}
          style={{
            ...props.style,
          }}
          type="file"
          onChange={(e) => {
            onChange(e.target.files);
            e.target.value = null;
          }}
          accept="image/*"
          style={{ display: "none" }}
        />
      </label>
    </div>
  );
};

export default InputImage;

import { useState } from "react";
import { uploadSingleImage, uploadMultipleImage } from "../api/uploadAPI";

const Homescreen = () => {
  const [singleImages, setSingleImages]: any = useState([]);
  const [multipleImages, setMultipleImages] = useState([]);

  const handleSingleImage = async (e: any) => {
    const file = e.target?.files[0];

    const formData = new FormData();
    formData.append("singleImage", file);

    const imageResult = await uploadSingleImage(formData);
    console.log("reading", imageResult);

    if (file) {
      setSingleImages((prevImages: any) => [...prevImages, file]);
    }
  };

  const handleMultipleImage = async (e: any) => {
    const files = e.target?.files;

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("multipleImage", files[i]);
    }

    const imageResults = await uploadMultipleImage(formData);
    console.log("reading", imageResults);

    if (files.length > 0) {
      setMultipleImages(Array.from(files));
    }
  };

  const handleSingleUploadClick = () => {
    document.getElementById("singleImage")?.click();
  };

  const handleMultipleUploadClick = () => {
    document.getElementById("multipleImage")?.click();
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-8">
        <div className="flex gap-6">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleSingleImage(e)}
            style={{ display: "none" }}
            id="singleImage"
          />
          <button
            className="text-white bg-blue-950 p-4 rounded-md font-medium cursor-pointer"
            onClick={handleSingleUploadClick}
          >
            Single Upload
          </button>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleMultipleImage(e)}
            style={{ display: "none" }}
            id="multipleImage"
            multiple
          />

          <button
            className="text-white bg-blue-950 p-4 rounded-md font-medium"
            onClick={handleMultipleUploadClick}
          >
            Multiple Upload
          </button>
        </div>
      </div>

      <p className="font-bold text-2xl pl-10">Images</p>
      <div className="p-2 mx-4 mt-10 flex bg-green-200">
        <div className="border rounded-md overflow-hidden">
          {singleImages.map((image: any, index: any) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Uploaded Single Image ${index + 1}`}
              className="min-w-[260px] h-[250px] rounded-md border m-2 bg-pink-600"
            />
          ))}

          {multipleImages.map((image: any, index: any) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Uploaded Multiple Image ${index + 1}`}
              className="min-w-[260px] h-[250px] rounded-md border m-2 bg-pink-600"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homescreen;

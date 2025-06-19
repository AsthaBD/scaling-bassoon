import { useState } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase";

export const VideoUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [videos, setVideos] = useState<string[]>([]);

  const uploadVideo = async () => {
    if (!file) return;
    const storageRef = ref(storage, `videos/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    setVideos((prev) => [...prev, url]);
    setFile(null);
  };

  const loadVideos = async () => {
    const listRef = ref(storage, "videos/");
    const res = await listAll(listRef);
    const urls = await Promise.all(res.items.map(item => getDownloadURL(item)));
    setVideos(urls);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Upload Video</h2>
      <input type="file" accept="video/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={uploadVideo} className="bg-orange-500 text-white px-4 py-2 rounded mt-2">Upload</button>
      <button onClick={loadVideos} className="ml-4 border px-4 py-2 rounded mt-2">Load All</button>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((url, idx) => (
          <video key={idx} controls className="w-full rounded shadow">
            <source src={url} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  );
};
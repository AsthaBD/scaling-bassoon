import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

export const VideoGallery = () => {
  const [videos, setVideos] = useState<string[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const listRef = ref(storage, "videos/");
      const res = await listAll(listRef);
      const urls = await Promise.all(res.items.map(item => getDownloadURL(item)));
      setVideos(urls);
    };
    fetchVideos();
  }, []);

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-4">Video Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((url, i) => (
          <video key={i} controls className="w-full rounded shadow">
            <source src={url} type="video/mp4" />
          </video>
        ))}
      </div>
    </section>
  );
};
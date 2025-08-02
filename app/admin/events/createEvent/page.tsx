'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function CreateEvent() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [eventData, setEventData] = useState({
    event_title: '',
    event_date: '',
    event_time: '',
    event_location: '',
    event_details: '',
    event_image: '', // for storing uploaded image URL
  });

  const [previewImage, setPreviewImage] = useState('');
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);
      setSelectedImageFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = '';
      // Upload image if selected
      if (selectedImageFile) {
        const formData = new FormData();
        formData.append('image', selectedImageFile);
       
        const res = await fetch('/api/event/uploadImage', {
          method: 'POST',
          body: formData,
        });
        console.log("after image upload.")

        if (!res.ok) {
          throw new Error('Image upload failed');
        }

        const data = await res.json();
        imageUrl = data.url;
      }else{
        toast.error("Event image is required..");
        return;
      }

      const res = await fetch('/api/event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...eventData,
          event_date: new Date(eventData.event_date),
          event_image: imageUrl,
        }),
      });

      if (res.ok) {
        const responseData=await res.json();
        console.log("responseData: ",responseData);
        toast.success(responseData.message);
        router.push('/events');
      } else{
        const errData=await res.json();
        console.log("errData.message",errData.message);
       throw new Error(errData.message || 'Failed to create event.');
      }
    } catch (error) {
      console.log(error);
      if(error instanceof Error){
        toast.error(error.message);
      }else{
        toast.error("Something went wrong");
      }

      
    } finally {
      setLoading(false);
    }
  };

  const defaultImage = '/selectImage.png';

  return (
      <>
       <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageSelect}
          style={{ display: 'none' }}
        />
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4">
      <h2 className="text-xl font-semibold">Create Event</h2>

      {/* Image Selector */}
      <div>
        <button
          type="button"
          onClick={handleImageClick}
          className="border border-gray-300 w-[200px] h-[200px] overflow-hidden rounded"
        >
          <Image
            alt="Preview"
            src={previewImage || defaultImage}
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </button>
       
      </div>

      {/* Event Fields */}
      <input
        type="text"
        name="event_title"
        placeholder="Event Title"
        value={eventData.event_title}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="date"
        name="event_date"
        value={eventData.event_date}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="time"
        name="event_time"
        value={eventData.event_time}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="event_location"
        placeholder="Location"
        value={eventData.event_location}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <textarea
        name="event_details"
        placeholder="Event Details"
        value={eventData.event_details}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Creating...' : 'Create Event'}
      </button>
    </form>
  </>
  );
}

'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { EventFormData } from '@/app/types/event';


const UpdateEvent: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState<EventFormData>({
    event_title: '',
    event_date: '',
    event_time: '',
    event_location: '',
    event_details: '',
    event_image: '',
  });

  const imageInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`/api/event?id=${id}`);
        if (!res.ok) throw new Error('Failed to fetch event');
        const data = await res.json();
        setFormData(data);
        setPreviewImage(data.event_image);
      } catch (err) {
        console.error(err);
        setMessage('Error loading event');
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleImageClick = () => {
    imageInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      let imageUrl = formData.event_image;

      if (imageFile) {
        const imageData = new FormData();
        imageData.append('image', imageFile);
        const res = await fetch('/api/events/uploadImage', {
          method: 'POST',
          body: imageData,
        });
        if (!res.ok) throw new Error('Image upload failed');
        const result = await res.json();
        imageUrl = result.url;
      }

      const updatedEvent = {
        ...formData,
        event_image: imageUrl,
      };
      console.log("updatedEvent",updatedEvent);

      const response = await fetch('/api/event', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(updatedEvent),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        router.push('/admin/events');
      } else {
        throw new Error(data.message || "Failed to update event");
      }
    } catch (error) {
        if(error instanceof Error){
         toast.error(error.message || "Failed to update event");
        }else{
          toast.error("something went wrong");
        }
    } finally {
      setLoading(false);
    }
  };

  const defaultImage = '/selectImage.png';

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Event</h1>

      <button
        className="border w-[200px] h-[200px] mb-4"
        onClick={handleImageClick}
      >
        <Image
          alt="preview"
          src={previewImage || defaultImage}
          width={200}
          height={200}
        />
      </button>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Event Title</label>
          <input
            type="text"
            name="event_title"
            value={formData.event_title}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Event Date</label>
          <input
            type="date"
            name="event_date"
            value={formData.event_date?.split('T')[0]}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Event Time</label>
          <input
            type="time"
            name="event_time"
            value={formData.event_time}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="event_location"
            value={formData.event_location}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Details</label>
          <textarea
            name="event_details"
            value={formData.event_details}
            onChange={handleChange}
            rows={6}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <input
          type="file"
          name="event_image"
          accept="image/*"
          ref={imageInputRef}
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Updating...' : 'Update Event'}
        </button>

        {message && <p className="text-red-500 mt-4">{message}</p>}
      </form>
    </div>
  );
};

export default UpdateEvent;

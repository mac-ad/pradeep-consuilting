'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import RichTextEditor from '@/components/rich-text-editor';
import { toast } from 'sonner';

interface BlogFormData {
  title: string;
  slug: string;
  content: string;
  image: string;
  authorId: string;
  metaTitle?: string;
  metaDescription?: string;
  seoData?: string;
}

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');
}

const EditBlog: React.FC = () => {
  const { slug } = useParams(); // Get slug from route
  console.log("slug: ",slug)
  const router = useRouter();
  

  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    slug: '',
    content: '',
    image: '',
    authorId: '',
    metaTitle: '',
    metaDescription: '',
    seoData: '',
  });

  const slugManuallyEdited = useRef(false);
  const blogImageRef = useRef<HTMLInputElement>(null);
  const [blogImageFile, setBlogImageFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  // Fetch existing blog
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blog?slug=${slug}`);
        if (!res.ok) throw new Error('Failed to fetch blog');
        const data = await res.json();
        setFormData(data);
        setPreviewImage(data.image);
      } catch (error) {
        console.error('Error loading blog:', error);
        setMessage('Error loading blog');
      }
    };

    fetchBlog();
    

  }, [slug]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (name === 'title' && !slugManuallyEdited.current) {
        return { ...prev, title: value, slug: generateSlug(value) };
      }
      if (name === 'slug') {
        slugManuallyEdited.current = true;
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBlogImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleClickImage = () => {
    blogImageRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      let imageUrl = formData.image;

      // If user selected a new image, upload it
      if (blogImageFile) {
        const imageData = new FormData();
        imageData.append('image', blogImageFile);
        const res = await fetch('/api/blog/uploadImage', {
          method: 'POST',
          body: imageData,
        });
        if (!res.ok){
          const imageErrorData=await res.json();
          throw new Error(imageErrorData.message);
        } 
        const result = await res.json();
        imageUrl = result.url;
      }

      const updatedBlog = {
        ...formData,
        image: imageUrl,
      };

      const response = await fetch('/api/blog', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBlog),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Blog updated successfully!");
        router.push('/admin/blogs'); // or wherever
      } else {
        setMessage(data.message || 'Failed to update blog.');
      }
    } catch (error) {
      console.error('Failed to update blog:', error);
      setMessage('Failed to update blog.');
    } finally {
      setLoading(false);
    }
  };

  const defaultImage = '/selectImage.png';

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <div>
        <button
          style={{ height: '200px', width: '200px', border: '1px solid black' }}
          onClick={handleClickImage}
        >
          <Image
            alt="preview"
            src={previewImage || defaultImage}
            width={200}
            height={200}
          />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        {[
          { label: 'Title', name: 'title' },
          { label: 'Slug', name: 'slug' },
          { label: 'Meta Title', name: 'metaTitle' },
          { label: 'Meta Description', name: 'metaDescription' },
          { label: 'SEO Data', name: 'seoData' },
        ].map(({ label, name }) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            <input
              type="text"
              name={name}
              value={formData[name as keyof BlogFormData] || ''}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required={['title', 'slug', 'content'].includes(name)}
              disabled={name==="slug"}
            />
          </div>
        ))}

        <div>
  <label className="block font-medium mb-1">Content</label>
  <RichTextEditor
    content={formData.content}
   
    onChange={(updatedContent) =>
      setFormData((prev) => ({ ...prev, content: updatedContent }))
    }
  />
</div>

        <input
          type="file"
          name="blogImage"
          accept="image/*"
          style={{ display: 'none' }}
          ref={blogImageRef}
          onChange={handleSelectImage}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {loading ? 'Updating...' : 'Update Blog'}
        </button>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </form>
    </div>
  );
};

export default EditBlog;

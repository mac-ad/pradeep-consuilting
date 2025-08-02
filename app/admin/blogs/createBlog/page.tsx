'use client';
import RichTextEditor from '@/components/rich-text-editor';
import Image from 'next/image';
import React, {useRef, useState } from 'react';
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

function generateSlug(text:string):string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')   // Remove special characters
    .replace(/\s+/g, '-')       // Replace spaces with hyphens
    .replace(/--+/g, '-');      // Replace multiple hyphens with a single one
}



const CreateBlog: React.FC = () => {
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
  // Track if user has manually edited slug
  const slugManuallyEdited=useRef(false);
  const [loading, setLoading] = useState(false);
  const blogImageRef=useRef<HTMLInputElement>(null);
  const [blogImageFile,setBlogImageFile]=useState<File|null>(null);
  const [previewImage,setPreviewImage]=useState('');
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


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageData=new FormData()
      
      imageData.append('image',blogImageFile!)
      const uploadImageResponse=await fetch('/api/blog/uploadImage',{
        method:'POST',
        body:imageData
      });
      if(!uploadImageResponse.ok){
        const imageErrorData=await uploadImageResponse.json();
      throw new Error(imageErrorData.message);
      }
      const uploadResult=await uploadImageResponse.json();
      const imageUrl=uploadResult.url;

      let userId=null;
      const userResponse=await fetch('/api/auth/userId',{
        method:'GET',
      });
      if(!userResponse.ok){
        throw new Error("You are not authenticated.please login")
      }
      const userData=await userResponse.json()
      userId=userData.userId;


     const blogPayload={
      title:formData.title,
      slug:formData.slug,
      content:formData.content,
      image:imageUrl,
      metaTitle:formData.metaTitle,
      metaDescription:formData.metaDescription,
      seoData:formData.seoData,
      authorId:userId
     }
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogPayload),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("blog created successfully..")
        setFormData({
          title: '',
          slug: '',
          content: '',
          image: '',
          authorId: '',
          metaTitle: '',
          metaDescription: '',
          seoData: '',
          
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
        console.log("faild to submit blog.",error)
          if(error instanceof Error){
                toast.error(error.message);
              }else{
                toast.error("Something went wrong");
              }
      // setMessage('Failed to submit blog.');
    } finally {
      setLoading(false);
    }
  };

  const handleClickImage=()=>{
    if(blogImageRef.current){
      console.log("clicked..")
      blogImageRef.current.click();
    }
  
  }
  const handleSelectImage=(event:React.ChangeEvent<HTMLInputElement>)=>{
       console.log("triggred select image..")
     const file=event.target.files?.[0];
     if(file){
      console.log("selected image file: ",file);
      const previewUrl=URL.createObjectURL(file);
      setPreviewImage(previewUrl);
      setBlogImageFile(file);

     }
  }

  const defaultSelectImage='/selectImage.png';

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create Blog</h1>
        <div><button style={{
          height:"200px",
          width:"200px",
          border:"1px solid black",
          overflow:"hidden"
        }} onClick={handleClickImage}>
          <Image alt='preview' src={previewImage? previewImage :defaultSelectImage} width={200} height={200}></Image>
          </button></div>
      <form onSubmit={handleSubmit} className="space-y-4">
      
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
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required={['title', 'slug', 'content'].includes(name)}
            />

            <input type='file' name='blogImage' accept='image/*' style={{
              display:"none"  
            }} ref={blogImageRef} onChange={handleSelectImage} />
          </div>
        ))}
        <div>
          <label className="block font-medium">Content</label>
          {/* <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={6}
            className="w-full border rounded px-3 py-2"
            required
          /> */}
      <RichTextEditor
  content={formData.content}
  onChange={(updatedContent) =>
    setFormData((prev) => ({ ...prev, content: updatedContent }))
  }
/>

        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Submitting...' : 'Create Blog'}
        </button>
        {/* {message && <p className="mt-4 text-red-500">{message}</p>} */}
      </form>
    </div>
  );
};

export default CreateBlog;

import Image from "next/image";

const WhatsappChat = () => {
  return (
    <a
      href="https://wa.me/+9779851184081"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed z-[999] bottom-10 left-5 lg:bottom-10 lg:left-20  p-3 rounded-full  hover:bg-green-600 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
    >
      <div className="relative">
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          height={48}
          width={48}
          className="object-contain"
        />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          1
        </span>
      </div>
    </a>
  );
};

export default WhatsappChat;

import { BUSINESS, waLink } from "../data/business";

export default function FloatingCTA() {
  return (
    <div className="fixed right-5 bottom-6 z-50 flex flex-col gap-3">
      <a
        href={waLink(`Hi ${BUSINESS.owner.split(" ")[0]}, I'd like to enquire about invisible grill / railing work.`)}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-black/40 hover:scale-105 transition-transform"
      >
        <svg width="27" height="27" viewBox="0 0 24 24" fill="#fff">
          <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4C7.6 4 4 7.6 4 12.05c0 1.42.37 2.8 1.08 4.02L4 20l4.05-1.06a8.05 8.05 0 0 0 4 1.02h.01c4.45 0 8.05-3.6 8.05-8.05a7.98 7.98 0 0 0-2.51-5.6zm-5.55 12.4h-.01a6.7 6.7 0 0 1-3.4-.93l-.24-.14-2.4.63.64-2.34-.16-.24a6.7 6.7 0 0 1-1.03-3.55c0-3.7 3.01-6.72 6.72-6.72 1.79 0 3.48.7 4.75 1.97a6.67 6.67 0 0 1 1.96 4.75c0 3.71-3.02 6.72-6.72 6.72zm3.68-5.03c-.2-.1-1.18-.58-1.36-.65-.18-.07-.32-.1-.45.1-.13.2-.51.65-.63.78-.11.13-.23.15-.43.05-.2-.1-.83-.3-1.58-.97-.58-.52-.98-1.16-1.09-1.36-.11-.2-.01-.3.09-.4.09-.1.2-.23.3-.35.1-.11.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.61-1.48-.16-.38-.33-.33-.45-.34-.11 0-.25-.01-.38-.01s-.35.05-.53.25c-.18.2-.7.68-.7 1.66s.72 1.93.82 2.06c.1.13 1.42 2.17 3.44 3.04.48.21.86.33 1.15.42.48.15.92.13 1.27.08.39-.06 1.18-.48 1.35-.94.17-.46.17-.86.12-.94-.05-.08-.18-.13-.38-.23z" />
        </svg>
      </a>
      <a
        href={`tel:${BUSINESS.phoneTel}`}
        aria-label="Call now"
        className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-black/40 hover:scale-105 hover:bg-orange-400 transition-all"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141312" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  );
}

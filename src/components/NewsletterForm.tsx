import React, { useState } from 'react';

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Successfully subscribed!');
      setEmail('');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-stretch font-medium tracking-[-0.5px]">
      <div className="text-lg leading-none text-white">Subscribe Form</div>
      <div className="border flex items-stretch gap-[20px] text-sm mt-[21px] pl-[10px] pr-1 py-[6px] rounded-[50px] border-[rgba(255,255,255,0.1)] border-solid">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email...."
          className="text-white my-auto bg-transparent border-none outline-none placeholder-white placeholder-opacity-70 flex-1"
          required
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting || !email}
          className="shadow-[0px_1px_3px_-1px_rgba(79,26,214,0.29)] overflow-hidden text-white leading-loose rounded-[30px] disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0px_1px_3px_-1px_rgba(79,26,214,0.5)] transition-shadow"
        >
          <div className="flex flex-col items-stretch justify-center p-[10px] rounded-[30px] border-[rgba(255,255,255,0.15)] border-solid border-[3px]">
            <div>{isSubmitting ? 'Subscribing...' : 'Subscribe Us'}</div>
          </div>
        </button>
      </div>
      {message && (
        <div className={`text-sm mt-2 ${message.includes('Successfully') ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </div>
      )}
    </form>
  );
};

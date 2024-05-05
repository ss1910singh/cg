'use client'

import { useState } from 'react';

export default function ContactForm() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch('api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullname,
                email,
                message,
            }),
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);
        setLoading(false);

        if (success) {
            setFullname('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex justify-center items-center min-h-screen">
                <div className="max-w-md mx-auto p-6 bg-black bg-opacity-60 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-white mb-6">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="fullname" className="block text-sm font-medium text-gray-400">Full Name</label>
                            <input
                                onChange={(e) => setFullname(e.target.value)}
                                value={fullname}
                                type="text"
                                id="fullname"
                                placeholder="John Doe"
                                className="w-full bg-gray-800 text-white border-gray-700 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                id="email"
                                placeholder="john@example.com"
                                className="w-full bg-gray-800 text-white border-gray-700 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                            <textarea
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                id="message"
                                placeholder="Your message here..."
                                className="w-full bg-gray-800 text-white border-gray-700 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
                                rows={4}
                                required
                            />
                        </div>

                        <button
                            className="bg-blue-600 text-white py-3 px-6 rounded-md font-semibold w-full"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                    {error.length > 0 && (
                        <div className="mt-4 p-2 bg-red-600 text-white rounded-md">
                            {error.map((errorMsg, index) => (
                                <p key={index}>{errorMsg}</p>
                            ))}
                        </div>
                    )}

                    {success && (
                        <div className="mt-4 p-2 bg-green-600 text-white rounded-md">
                            <p>Message sent successfully!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

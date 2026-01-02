import React from 'react';

const FeatureSection = () => {

    // ফিচার ডাটাগুলো এখানে অ্যারে আকারে রাখা হয়েছে যাতে সহজে এডিট করা যায়
    const features = [
        {
            id: 1,
            title: "Super Fast Delivery",
            description: "আমরা নিশ্চিত করি আপনার পণ্য যেন সবচেয়ে দ্রুততম সময়ে আপনার কাছে পৌঁছায়।",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            id: 2,
            title: "Secure Payment",
            description: "আমাদের পেমেন্ট গেটওয়ে সম্পূর্ণ নিরাপদ এবং এনক্রিপটেড প্রযুক্তিতে তৈরি।",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            id: 3,
            title: "24/7 Support",
            description: "যেকোনো সমস্যায় আমাদের সাপোর্ট টিম দিনরাত আপনার পাশে আছে।",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
        // ৪ নম্বর কার্ড চাইলে আন-কমেন্ট করতে পারেন
        /*
        {
            id: 4,
            title: "User Friendly",
            description: "আমাদের ইন্টারফেস এতটাই সহজ যে কোনো নতুন ইউজার সহজেই ব্যবহার করতে পারবে।",
            icon: (
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
        */
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">

                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h4 className="text-indigo-600 font-semibold uppercase tracking-wider text-sm mb-2">
                        আমাদের বৈশিষ্ট্য
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        কেন আমাদের বেছে নেবেন?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        আমরা প্রদান করি সেরা মানের সেবা যা আপনার প্রয়োজন মেটাতে সক্ষম। আধুনিক সব ফিচার দিয়ে সাজানো আমাদের এই প্ল্যাটফর্ম।
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-indigo-100 dark:hover:border-gray-700 group"
                        >
                            {/* Icon Box */}
                            <div className="w-16 h-16 bg-indigo-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                                {/* SVG Icon color change on hover handled by generic CSS or classes */}
                                <div className="text-indigo-600 group-hover:text-white transition-colors duration-300">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Text Content */}
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
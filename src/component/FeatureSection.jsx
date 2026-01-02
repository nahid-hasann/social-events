import React from 'react';

const FeatureSection = () => {

    // Your specific primary color
    const primaryColorText = "text-[#2563eb]";
    const primaryColorBg = "bg-[#2563eb]";
    const primaryColorBorder = "hover:border-[#2563eb]";

    const features = [
        {
            id: 1,
            title: "High Performance",
            description: "Experience lightning-fast speeds with our optimized infrastructure designed for efficiency.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${primaryColorText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            id: 2,
            title: "Secure Data",
            description: "Your data is protected with top-tier encryption and industry-standard security protocols.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${primaryColorText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            id: 3,
            title: "24/7 Support",
            description: "Our dedicated support team is available around the clock to assist you with any issues.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${primaryColorText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h4 className={`font-bold uppercase tracking-widest text-sm mb-3 ${primaryColorText}`}>
                        Our Features
                    </h4>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                        Why Choose Us?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        We provide top-notch services tailored to your needs. Discover the features that set us apart from the competition.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className={`group bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 ${primaryColorBorder}`}
                        >
                            {/* Icon Box */}
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 bg-opacity-10 bg-[#2563eb] group-hover:bg-[#2563eb]`}>
                                {/* Icon wrapper to handle hover color change */}
                                <div className={`${primaryColorText} group-hover:text-white transition-colors duration-300`}>
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Text Content */}
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#2563eb] transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
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
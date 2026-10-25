export default function Features() {
    const features = [
        {
            title: "24×7",
            subtitle: "Emergency Support",
            iconBg: "bg-red/10",
            iconColor: "text-red",
            icon: (
                <svg className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M11 21.8C9 21.5 4 17 4 10.5V5.2L11.5 2L19 5.2V10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
                    <path d="M11 21.8C9 21.5 4 17 4 10.5V5.2L11.5 2L19 5.2V10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 10H15M11.5 6.5V13.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="17.5" cy="17.5" r="4.5" strokeWidth="1.5" className="fill-white dark:fill-gray-800" />
                    <path d="M17.5 15V17.5L19 19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Specialized Care",
            subtitle: "Maternity & Orthopedics",
            iconBg: "bg-yellow/10",
            iconColor: "text-yellow",
            icon: (
                <svg className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 21C12 21 20 15.5 20 10.5C20 7.5 17.5 5 15 5C13.3 5 11.7 5.8 10.7 7.2C10 6.1 8.8 5 7.5 5C4.5 5 2 7.5 2 10.5C2 15.5 10 21 10 21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
                    <path d="M12 21C12 21 20 15.5 20 10.5C20 7.5 17.5 5 15 5C13.3 5 11.7 5.8 10.7 7.2C10 6.1 8.8 5 7.5 5C4.5 5 2 7.5 2 10.5C2 15.5 10 21 10 21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.5 10.5H14.5M11.5 7.5V13.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 22C12 22 17 19.5 19 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 22C12 22 7 19.5 5 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Advanced Labor Room",
            subtitle: "Friendly, Supportive Environment",
            iconBg: "bg-green/10",
            iconColor: "text-green",
            icon: (
                <svg className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 17V12C5 10.9 5.9 10 7 10H17C18.1 10 19 10.9 19 12V17" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
                    <path d="M3 17H21M3 21V17M21 21V17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 17V12C5 10.9 5.9 10 7 10H17C18.1 10 19 10.9 19 12V17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 10V6C8 4.9 8.9 4 10 4H14C15.1 4 16 4.9 16 6V10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12V15M10.5 13.5H13.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 4L19.5 5.5L21 6L19.5 6.5L19 8L18.5 6.5L17 6L18.5 5.5L19 4Z" fill="currentColor" stroke="none" />
                    <path d="M5 5L5.3 5.8L6 6L5.3 6.2L5 7L4.7 6.2L4 6L4.7 5.8L5 5Z" fill="currentColor" stroke="none" />
                </svg>
            )
        }
    ];

    return (
        <div className="relative z-30  w-full -mt-10 md:-mt-16">
            <div className="new-container">
                {/* Clean White Card with Subtle Shadow and Dividers */}
                <div className="grid grid-cols-1 md:grid-cols-3 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 dark:border-gray-700 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-700">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 md:p-8 flex items-center gap-5 group hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300 cursor-pointer"
                        >
                            {/* Tinted Icon Box */}
                            <div className={`shrink-0 p-3.5 rounded-xl ${feature.iconBg} ${feature.iconColor}`}>
                                {feature.icon}
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col">
                                <h3 className="text-navy dark:text-white font-heading text-lg lg:text-xl font-bold mb-1">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-medium leading-snug">
                                    {feature.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
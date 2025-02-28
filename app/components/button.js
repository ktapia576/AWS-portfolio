
/* Button component to reuse same Tailwind Styling to make code neater and less verbose for parent Button wrapper components*/

export default function Button({children, className = "", ...props}) {
    return (
        <button 
            className={`bg-primary-light text-white outline-2 outline-primary-outline px-4 py-2 rounded  hover:bg-secondary cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
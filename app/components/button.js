
/* 

Button component to reuse same Tailwind Styling throughout project. 
This makes code neater and less verbose for parent Button wrapper components.
Still allows customization from parent component due to className being passed 
down as prop and appended to end of className attribute, taking precedence over
parent styling if needed 

*/

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
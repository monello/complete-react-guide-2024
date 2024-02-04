export const Input = ({ label, invalid, ...props }) => {
    let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase';
    labelClasses += invalid ? ' text-red-400' : ' text-stone-300';

    let inputClasses =
        'w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow';
    inputClasses += invalid
        ? ' text-red-500 bg-red-100 border-red-300'
        : ' text-gray-700 bg-stone-300';

    return (
        <p>
            <label className={labelClasses}>{label}</label>
            <input className={inputClasses} {...props} />
        </p>
    );
};

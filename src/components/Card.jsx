const Card = ({ children,imageSrc, bg = 'bg-white' }) => {
    return (
        <div className={`${bg} p-6 rounded-lg shadow-md`}>
            {children}
        </div>
    );
}
 
export default Card;
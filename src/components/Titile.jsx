// reusuable title code

const Title = ({ name }) => {
    return (
        <div className='flex items-center gap-[10px] mb-4'>
            <div className='w-[10px] h-[10px] bg-[#BD1F17]'></div>
            <p className='text-[#BD1F17] font-bold'>{name}</p>
        </div>
    );
};

export default Title;
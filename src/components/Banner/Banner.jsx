import bgImage from '../../assets/image/banner.png'

const Banner = () => {
    return (
        <div  className="bg-cover bg-center h-[600px] w-[1320px] items-center rounded-2xl mx-auto" style={{backgroundImage:`url(${bgImage})`}}>
          <div className='text-center pt-32'>
            <h1 className='text-6xl text-white font-bold'>Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className='text-white text-xl font-light mt-6'>Cooking, also known as cookery or professionally as the culinary arts, is the art, <br /> science and craft of using heat to make food more palatable, digestible, nutritious, or safe.</p>
            <div className='mt-8 flex gap-8 pl-[480px]'>
                <button className='bg-[#0BE58A] p-5 rounded-full font-bold'>Explore Now</button>
                <button className='border-2 p-5 rounded-full font-bold text-white'>Our Feedback</button>
            </div>
          </div>  
        </div>
    );
};

export default Banner;
import { Parallax, Background } from 'react-parallax';

const Cover = ({img, height, title, subTitle}) => {
    return (
      <Parallax
      blur={{ min: -20, max: 20 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
      className='rounded-md'
  >
      <div
        className={`relative `}
        style={{
          height: `${height}`
        }}>
        {/* <div className="absolute w-full inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-300 rounded-md"></div> */}
        <div className="h-full w-full flex items-center max-w-5xl mx-auto xl:px-0">
          <div className="text-center rounded-md  w-full" style={{
            background: 'rgba(21, 21, 21, 0.6)',
          }}>
            <div className=" rounded-md py-24 px-10">
              <h1 className="mb-5 text-5xl font-bold font-cinzel text-white">{title}</h1>
              <p className="mb-5 text-white font-cinzel text-xl">
                {subTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
  </Parallax>
        
    );
};

export default Cover;
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, image_url, details, thumbnail_url, total_viwes,_id
    } = news
    // console.log(news)
    return (
        <div>
            <div>
                <div className="relative mx-auto mt-2 flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <img className='w-full'
                            src={thumbnail_url}
                            alt=""
                        />
                    </div>
                    <div className="p-6">
                        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {title.slice(0, 30)}
                        </h4>
                        {details.length > 200 ? 
                        <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                            {details.slice(0,200)} <Link to={`/${_id}`} className=' btn btn-xs btn-outline'>Read More..</Link>
                        </p> :
                        
                        <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">{details}
                        </p>
                        }
                    </div>
                    <div className="flex items-center justify-between p-6">
                        <div className="flex items-center -space-x-3">
                            <img
                                alt=""
                                src=""
                                className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                                data-tooltip-target="author-1"
                            />
                            <div
                                data-tooltip="author-1"
                                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
                            >
                                Natali Craig
                            </div>
                            <img
                                alt=""
                                src=""
                                className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                                data-tooltip-target="author-2"
                            />
                            <div
                                data-tooltip="author-2"
                                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
                            >
                                Tania Andrew
                            </div>
                        </div>
                        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                            January 10
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
NewsCard.propTypes = {
    news: PropTypes.object
};
export default NewsCard;








import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view,
        tags,
    } = news;

    return (
        <div className="bg-white  rounded-lg overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between p-5 bg-base-200">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold">{author.name}</p>
                        <p className="text-sm text-gray-500">
                            {format(new Date(author.published_date), "yyyy-MM-dd")}
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 text-gray-500 text-lg">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            </div>

            {/* Image */}
            <div className="px-5 ">
                <img src={thumbnail_url} alt={title} className="w-full h-72 object-cover rounded-lg" />
            </div>

            {/* Details */}
            <div className="p-4 text-gray-700">
                <p>{details.length > 250 ? details.slice(0, 250) + "..." : details}</p>
                <button className="text-orange-600 font-semibold hover:underline mt-2 block">
                    Read More
                </button>
            </div>

            {/* Footer */}
            <div className="px-5">
                <div className="flex items-center justify-between py-5 border-t border-base-300 text-gray-600">
                    {/* Rating Stars with Float Support */}
                    <div className="flex items-center gap-1 text-orange-400">
                        {[...Array(5)].map((_, index) => (
                            <FaStar
                                key={index}
                                className={index < (rating.number) ? 'text-orange-400' : 'text-gray-300'}
                            />
                        ))}
                        <span className="ml-2 font-semibold text-gray-800">{rating.number}</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
